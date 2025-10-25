import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().trim().email({
    message: 'Email must be a valid email address.',
  }),
  message: z
    .string()
    .trim()
    .min(10, {
      message: 'Subject must be at least 7 characters.',
    })
    .max(160, {
      message: 'Subject must not be longer than 30 characters.',
    }),
})
