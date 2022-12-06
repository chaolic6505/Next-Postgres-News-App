import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.STEPZEN_ENDPOINT,
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
})

export default client
