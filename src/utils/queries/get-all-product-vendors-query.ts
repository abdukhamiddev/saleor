/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None 
*/

export const getAllProductVendors = /* GraphQL */ `
  query getAllProductVendors($first: Int = 250, $cursor: String) {
    products(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          vendor
        }
        cursor
      }
    }
  }
`
