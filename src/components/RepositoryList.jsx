import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
  });
  const { repositories } = data;

  return !loading && <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
