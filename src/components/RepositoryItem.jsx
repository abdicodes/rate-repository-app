import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => (
  <View>
    <Text>Full Name: {item.fullName}</Text>
    <Text>description: {item.description}</Text>
    <Text>language: {item.language}</Text>
    <Text>Stars: {item.stargazersCount}</Text>
    <Text>forks: {item.forksCount}</Text>
    <Text>reviews: {item.reviewCount}</Text>
    <Text>rating: {item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
