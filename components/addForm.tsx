'use client'

import { createContacts } from '@/app/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

// return succes or failed
const initialState = {
  message: '',
}

const initialFormData = {
  id: 0,
  name: '',
  email: '',
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  )
}

export function AddForm() {
  const [state, formAction] = useActionState(createContacts, initialState)

  return (
    <form action={formAction}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <SubmitButton />
        <p aria-live="polite" className="sr-only" role="status">
          {(state?.name, state?.email, state?.message)}
        </p>
      </div>
    </form>
  )
}
