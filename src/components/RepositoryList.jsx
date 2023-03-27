import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

const RepositoryList = () => {
  const [selectedOrderType, setSelectedOrderType] = useState('CREATED_AT');
  const [selectDirection, setSelectDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: selectedOrderType,
      orderDirection: selectDirection,
      searchKeyword: searchKeyword,
    },
  });
  if (loading) return null;
  const { repositories } = data;

  const sortRepositories = (itemValue) => {
    if (itemValue === 'latest') {
      setSelectedOrderType('CREATED_AT');
      setSelectDirection('DESC');
    }

    if (itemValue === 'highRate') {
      setSelectedOrderType('RATING_AVERAGE');
      setSelectDirection('DESC');
    }
    if (itemValue === 'lowRate') {
      setSelectedOrderType('RATING_AVERAGE');
      setSelectDirection('ASC');
    }
  };

  const searchRepositories = (keyword) => {
    console.log(keyword);
    setSearchKeyword(keyword);
  };

  return (
    !loading && (
      <RepositoryListContainer
        repositories={repositories}
        sortRepositories={sortRepositories}
        searchRepositories={searchRepositories}
        value={searchKeyword}
      />
    )
  );
};

export default RepositoryList;
