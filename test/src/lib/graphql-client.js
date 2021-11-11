import { SvelteApolloClient } from "svelte-apollo-client";
import { InMemoryCache } from '@apollo/client/core/core.cjs.js';

export const client = SvelteApolloClient({
    uri: 'https://api.findcar.parts/v1/graphql',
    cache: new InMemoryCache(),
  });

// import { GraphQLClient } from 'graphql-request'
// const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT']

// export const client = new GraphQLClient ({
//     uri: 'https://api.findcar.parts/v1/graphql',
// });

// // import { Client, setDefaultClient } from "micro-graphql-svelte";

// // const client = new Client({
// //   endpoint: "https://api.findcar.parts/v1/graphql",
// //   fetchOptions: { credentials: "include" }
// // });

// // setDefaultClient(client);