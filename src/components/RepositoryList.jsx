import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

const RepositoryList = () => {
  const [selectedOrderType, setSelectedOrderType] = useState('CREATED_AT');
  const [selectDirection, setSelectDirection] = useState('DESC');
<<<<<<< HEAD
=======
  const [searchKeyword, setSearchKeyword] = useState('');
>>>>>>> acbff7c (refactor)

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: selectedOrderType,
      orderDirection: selectDirection,
<<<<<<< HEAD
=======
      searchKeyword: searchKeyword,
>>>>>>> acbff7c (refactor)
    },
  });
  if (loading) return null;
  const { repositories } = data;

<<<<<<< HEAD
  const onSubmit = (itemValue) => {
=======
  const sortRepositories = (itemValue) => {
>>>>>>> acbff7c (refactor)
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

<<<<<<< HEAD
=======
  const searchRepositories = (keyword) => {
    console.log(keyword);
    setSearchKeyword(keyword);
  };

>>>>>>> acbff7c (refactor)
  return (
    !loading && (
      <RepositoryListContainer
        repositories={repositories}
<<<<<<< HEAD
        onSubmit={onSubmit}
=======
        sortRepositories={sortRepositories}
        searchRepositories={searchRepositories}
        value={searchKeyword}
>>>>>>> acbff7c (refactor)
      />
    )
  );
};

export default RepositoryList;
