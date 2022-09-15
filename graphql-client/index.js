import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
  export  const client = new ApolloClient({
    uri: 'https://m2ayyv2ch2.execute-api.us-east-1.amazonaws.com/prod/search/graphql',
    cache: new InMemoryCache(),
    cors: {
    origin: 'https://m2ayyv2ch2.execute-api.us-east-1.amazonaws.com/prod/search/graphql',
    credentials: true 
    },
    fetchOptions: {
        mode: 'no-cors',
      },
    headers: {
              'Content-type' : 'application/json',
              'Access-Control-Allow-Origin':'no-cors',
            }
  });
const GrapQlClient = ({children}) => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       client.setHeader(
    //         'Authorization', `Bearer ${sessionStorage.getItem('AccessToken')}`,
    //       )
    //   }
    //   }, []);
    return (
        <ApolloProvider client={client}>
            {children} 
        </ApolloProvider>
      )
}

export default GrapQlClient