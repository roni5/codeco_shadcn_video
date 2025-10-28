'use server'

import { db } from '@/lib/db'
import { contacts } from '@/lib/schema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { sql } from 'drizzle-orm'
import { z } from 'zod'

export type ContactFormState = {
  form: {
    lastName: string | null
    firstName: string
    name: string
    email: string
    message: string
    phone?: string
    subject?: string
  }
  status: 'default' | 'success' | 'error' | 'field-errors'
  errors?: Record<string, string>
}

type Form = {
  name: string
  email: string
  message: string
  phone?: string
  subject?: string
}

const contactValidation = z.object({
  name: z.string().trim().min(1, 'Name is required.'),
  email: z.string().trim().email('Email must be a valid email address.'),
  message: z.string().trim().min(1, 'Message is required.'),
  phone: z.string().optional(),
  subject: z.string().optional(),
})

export async function createContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  console.log('Contact form submission received')

  // Runtime DB proof (no ambiguity)
  console.log('DB_URL at runtime:', process.env.DATABASE_URL)
  const info = await db.execute(
    sql`select current_database() as db, current_user as usr, current_schema as sch`
  )
  console.log('DB runtime:', info.rows?.[0] ?? info[0])

  const form: Form = {
    name: (formData.get('name') as string) ?? '',
    email: (formData.get('email') as string) ?? '',
    message: (formData.get('message') as string) ?? '',
    phone: (formData.get('phone') as string) || undefined,
    subject: (formData.get('subject') as string) || undefined,
  }

  const validation = contactValidation.safeParse(form)
  if (!validation.success) {
    const errorMessages = Object.fromEntries(
      Object.entries(validation.error.flatten().fieldErrors).map(
        ([key, value]) => [key, value?.[0] ?? 'Invalid input']
      )
    )
    return {
      form,
      status: 'field-errors',
      errors: errorMessages,
    }
  }

  try {
    const v = validation.data
    const inserted = await db
      .insert(contacts)
      .values({
        name: v.name,
        email: v.email,
        message: v.message,
        phone: v.phone ?? null,
        subject: v.subject ?? null,
      })
      .returning({ id: contacts.id })

    console.log('Inserted rows:', inserted)

    // Verify immediately
    const after = await db.execute(
      sql`select count(*)::int as c from "contact"`
    )
    console.log(
      'Contact count after insert:',
      after.rows?.[0]?.c ?? after[0]?.c
    )

    revalidateTag('contacts')
    revalidatePath('/')

    return {
      form: { name: '', email: '', message: '', phone: '', subject: '' },
      status: 'success',
    }
  } catch (err) {
    console.error(err)
    return {
      form,
      status: 'error',
      errors: { error: 'An error occurred. Please try again.' },
    }
  }
}


