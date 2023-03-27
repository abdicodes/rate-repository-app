import { GET_CURRENT_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet, Pressable, Text } from 'react-native';
import ReviewItem from './ReviewItem';
import { useNavigate } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
  });

  const Review = ({ review }) => {
    const navigate = useNavigate();
    return (
      <>
        <ReviewItem review={review} />
        <Pressable onPress={() => navigate(`/${review.node.repositoryId}`)}>
          <View>
            <Text>View repository</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log('delete')}>
          <View>
            <Text>Delete repository</Text>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    !loading &&
    data.me && (
      <FlatList
        data={data.me.reviews.edges}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={({ node }) => node.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    )
  );
};

export default UserReviews;
