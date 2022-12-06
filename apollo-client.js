import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://chaudfontaine.stepzen.net/api/awesome-octopus/',
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
})

export default client
