import { ApolloClient, InMemoryCache } from '@apollo/client'

console.log(process.env)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_STEPZEN_ENDPOINT,
  headers: {
    Authorization: `apikey  ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
  },
})

export default client
