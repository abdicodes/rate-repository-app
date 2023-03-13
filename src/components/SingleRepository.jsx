import { FlatList, Text, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY } from '../graphql/queries';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 20,
  },
  separator: {
    height: 15,
    backgroundColor: theme.colors.separator,
  },
  textContainer: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 30,
  },
  circleContainer: {
    borderWidth: 2,
    borderColor: theme.colors.buttonPrimary,
    height: 45,
    width: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.heading,
    color: theme.colors.buttonPrimary,
    fontWeight: theme.fontWeights.bold,
  },
  titleText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
  },
  date: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    paddingTop: 5,
  },
  reviewText: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
});

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} showLink={true} />;
};

const ReviewItem = ({ review }) => {
  const date = new Date(review.node.createdAt);
  const formattedDate = date.toLocaleDateString('en-GB'); // DD.MM.YYYY format
  console.log(review);
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Text style={styles.circleText}>{review.node.rating}</Text>
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{review.node.user.username}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.reviewText}>{review.node.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) return null;
  const repository = data.repository;
  console.log(repository.reviews);
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
