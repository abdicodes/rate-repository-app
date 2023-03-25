import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  const repositoryNodes = repositories.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};
export default RepositoryListContainer;
