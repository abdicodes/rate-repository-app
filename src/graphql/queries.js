import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
<<<<<<< HEAD
  query ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
=======
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
>>>>>>> acbff7c (refactor)
      edges {
        node {
          id
          ownerName
          description
          language
          forksCount
          stargazersCount
          fullName
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

export const SINGLE_REPOSITORY = gql`
  query SingleRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            createdAt
            rating
            id
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
