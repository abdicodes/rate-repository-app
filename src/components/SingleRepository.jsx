import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import theme from '../theme';
import RepoReviewItem from './RepoReviewItem';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.separator,
  },
});

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} showLink={true} />;
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore, loading } = useRepository({
    first: 4,
    repositoryId: id,
  });

  const onEndReach = () => {
    fetchMore();
  };
  if (loading) return null;

  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <RepoReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
      // ...
    />
  );
};

export default SingleRepository;
