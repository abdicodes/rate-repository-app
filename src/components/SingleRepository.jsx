import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY } from '../graphql/queries';
import theme from '../theme';
import ReviewItem from './ReviewItem';

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

  const { data, loading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;
  const repository = data.repository;
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};

export default SingleRepository;
