import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient, { HttpLink } from 'apollo-client-preset'
import AppConfig from './AppConfig'

// const cache = new InMemoryCache();

const client = new ApolloClient({
 link: new HttpLink({ uri: AppConfig.graphcoolConnString }),

});

export default client