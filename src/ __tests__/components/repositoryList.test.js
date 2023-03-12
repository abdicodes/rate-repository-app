/* eslint-disable jest/expect-expect */

//see
import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';
import kFormatter from '../../utils/kFormatter';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'zeit.next.js',
              ownerName: 'zeit',
              description: 'The React Framework',
              language: 'JavaScript',
              forksCount: 22843,
              stargazersCount: 102192,
              ratingAverage: 0,
              reviewCount: 0,
              ownerAvatarUrl:
                'https://avatars.githubusercontent.com/u/14985020?v=4',
              fullName: 'zeit/next.js',
            },
            cursor: 'WzE2Nzg0MTYyNzMwMjgsInplaXQubmV4dC5qcyJd',
          },
          {
            node: {
              id: 'zeit.swr',
              ownerName: 'zeit',
              description: 'React Hooks for Data Fetching',
              language: 'TypeScript',
              forksCount: 1025,
              stargazersCount: 25973,
              ratingAverage: 0,
              reviewCount: 0,
              ownerAvatarUrl:
                'https://avatars.githubusercontent.com/u/14985020?v=4',
              fullName: 'zeit/swr',
            },
            cursor: 'WzE2Nzg0MTI2NzMwMjgsInplaXQuc3dyIl0=',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      expect(firstRepositoryItem).toHaveTextContent('zeit/next.js');
      expect(firstRepositoryItem).toHaveTextContent('The React Framework');
      expect(firstRepositoryItem).toHaveTextContent('JavaScript');
      expect(secondRepositoryItem).toHaveTextContent('zeit/swr');
      expect(secondRepositoryItem).toHaveTextContent(
        'React Hooks for Data Fetching'
      );
      expect(secondRepositoryItem).toHaveTextContent('TypeScript');

      /* for those numerical values we will use the same helper function that parses
      numerical values to k e.g., 1000 = 1k in the same way they're rendered  */
      expect(firstRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[0].node.forksCount)}Forks`
      );
      expect(firstRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[0].node.stargazersCount)}Stars`
      );
      expect(firstRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[0].node.reviewCount)}Reviews`
      );
      expect(firstRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[0].node.ratingAverage)}Rating`
      );

      expect(secondRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[1].node.forksCount)}Forks`
      );
      expect(secondRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[1].node.stargazersCount)}Stars`
      );
      expect(secondRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[1].node.reviewCount)}Reviews`
      );
      expect(secondRepositoryItem).toHaveTextContent(
        `${kFormatter(repositories.edges[1].node.ratingAverage)}Rating`
      );

      //   screen.debug();
      // Add your test code here
    });
  });
});
