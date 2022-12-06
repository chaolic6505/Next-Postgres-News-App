import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://chaudfontaine.stepzen.net/api/awesome-octopus/__graphql',
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
})

export default client
