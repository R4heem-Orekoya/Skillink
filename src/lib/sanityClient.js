import { createClient } from '@sanity/client'

const client = createClient({
   projectId: '7sgufrjm',
   dataset: 'production',
   useCdn: true,
   apiVersion: '2024-03-04'
})

export default client