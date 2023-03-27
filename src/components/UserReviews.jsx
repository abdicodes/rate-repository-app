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
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    marginHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonPrimary,
    width: 150,
    height: 40,
  },
  deletebutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    marginHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonSecondary,
    width: 150,
    height: 40,
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    letterSpacing: 0.25,
    color: theme.colors.buttonText,
    paddingHorizontal: 2,
    alignSelf: 'center',
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
        <View style={styles.container}>
          <Pressable onPress={() => navigate(`/${review.node.repositoryId}`)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>View repository</Text>
            </View>
          </Pressable>
          <Pressable onPress={createTwoButtonAlert}>
            <View style={styles.deletebutton}>
              <Text style={styles.buttonText}>Delete review</Text>
            </View>
          </Pressable>
        </View>
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
