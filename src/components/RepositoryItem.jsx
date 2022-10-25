import { View, Text } from 'react-native';

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}
const RepositoryItem = ({ item }) => (
  <View>
    <Text>Full Name: {item.fullName}</Text>
    <Text>description: {item.description}</Text>
    <Text>language: {item.language}</Text>
    <Text>Stars: {kFormatter(item.stargazersCount)}</Text>
    <Text>forks: {kFormatter(item.forksCount)}</Text>
    <Text>reviews: {item.reviewCount}</Text>
    <Text>rating: {item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
