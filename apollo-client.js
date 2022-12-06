import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5001/api/awesome-octopus',
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
})

export default client
