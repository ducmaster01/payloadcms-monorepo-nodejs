import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
