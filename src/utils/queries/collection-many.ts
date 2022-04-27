/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None 
*/

export const CollectionMany = /* GraphQL */ `
  query CollectionMany($first: Int!, $channel: String = "default-channel") {
    collections(first: $first, channel: $channel) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
