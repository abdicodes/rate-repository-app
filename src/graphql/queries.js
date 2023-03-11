import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
          name
        }
      }
    }
  }
`;
export const IS_SIGNED_IN = gql`
  query {
    me {
      id
      username
    }
  }
`;
