import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [selectedOrderType, setSelectedOrderType] = useState('CREATED_AT');
  const [selectDirection, setSelectDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const { repositories, fetchMore, loading } = useRepositories({
    first: 6,
    orderBy: selectedOrderType,
    orderDirection: selectDirection,
    searchKeyword: searchKeyword,
  });

  const onEndReach = () => {
    fetchMore();
  };
  if (loading) return null;

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
    setSearchKeyword(keyword);
  };

  return (
    !loading && (
      <RepositoryListContainer
        repositories={repositories}
        sortRepositories={sortRepositories}
        searchRepositories={searchRepositories}
        value={searchKeyword}
        onEndReach={onEndReach}
      />
    )
  );
};

export default RepositoryList;
