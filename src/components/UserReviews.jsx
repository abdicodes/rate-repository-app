import { GET_CURRENT_USER } from '../graphql/queries';
import { DELEATE_REVIEW } from '../graphql/mutations';
import { useQuery, useMutation } from '@apollo/client';
import {
  FlatList,
  View,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import ReviewItem from './UserReviewItem';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';
import useCurrentUser from '../hooks/useCurrentUser';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { data, loading, refetch } = useCurrentUser(true);
  console.log(data);
  const [deleteReview] = useDeleteReview();

  const deleteReviewHandler = async (id) => {
    try {
      const { data } = await deleteReview(id);
      console.log(data);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };
  const Review = ({ review }) => {
    const navigate = useNavigate();
    const createTwoButtonAlert = () =>
      Alert.alert(
        'Delete review',
        'Are you sure you want to delete this review',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => deleteReviewHandler(review.node.id) },
        ]
      );
    return (
      <>
        <ReviewItem review={review} />
        <Pressable onPress={() => navigate(`/${review.node.repositoryId}`)}>
          <View>
            <Text>View repository</Text>
          </View>
        </Pressable>
        <Pressable onPress={createTwoButtonAlert}>
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
