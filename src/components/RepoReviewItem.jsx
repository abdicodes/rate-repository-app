import { Text, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 20,
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
  uriText: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.heading,
    letterSpacing: 0.25,
    color: theme.colors.buttonText,
    paddingHorizontal: 2,
    alignSelf: 'center',
  },
  uriButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonPrimary,
    margin: 15,
  },
});
const RepoReviewItem = ({ review }) => {
  console.log(review);
  const date = new Date(review.node.createdAt);
  const formattedDate = date.toLocaleDateString('en-GB'); // DD.MM.YYYY format
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

export default RepoReviewItem;
