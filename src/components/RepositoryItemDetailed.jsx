import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.singleRepository },
});

const RepositoryItemDetailed = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) return null;
  const item = data.repository;
  return (
    <View testID="repositoryItem" style={styles.backgroundColor}>
      <RepositoryItem item={item} showLink={true} />
    </View>
  );
};

export default RepositoryItemDetailed;
