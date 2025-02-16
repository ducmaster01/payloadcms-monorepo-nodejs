import { generateSignupEmailHtml } from '@/emails/generateHtml'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    verify: {
      generateEmailHTML: async ({ req, token, user }) => {
        // Use the token provided to allow your user to verify their account
        const emailHtml = generateSignupEmailHtml(token)

        return emailHtml
      },
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
