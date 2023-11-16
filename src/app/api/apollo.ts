import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://api.tarkov.dev/graphql",
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;