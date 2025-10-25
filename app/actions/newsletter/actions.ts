'use server'

import { db } from '@/lib/db'
import { newsletters } from '@/lib/schema'
import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'

export type NewsletterFormState = {
  form: {
    email: string
  }
  status: 'default' | 'success' | 'error' | 'field-errors'
  errors?: Record<string, string>
}

type Form = {
  email: string
}

const newsvalidation = z.object({
  email: z.string().trim().email({
    message: 'Email must be a valid email address.',
  }),
})

export async function createNewsletter(
  prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const form: Form = {
    email: formData.get('email') as string,
  }

  const validation = newsvalidation.safeParse(form)

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
    const validatedForm = validation.data
    await db
      .insert(newsletters)
      .values({
        email: validatedForm.email,
        // No need to specify id - PostgreSQL will generate it automatically
      })
      .returning()

    revalidateTag('newsletters')

    return {
      form: { email: '' },
      status: 'success',
    }
  } catch (err) {
    console.error(err)
    return {
      form,
      status: 'error',
      errors: { error: 'An error occurred. Please try again.' },
    }
  } finally {
    revalidatePath('/')
  }
}
