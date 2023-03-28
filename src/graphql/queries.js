import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Query(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
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
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            rating
            id
            text
            repositoryId
          }
        }
      }
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
