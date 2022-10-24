import { FlatList, View, Text } from 'react-native';

const Item = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => (
  <View>
    <Text>Full Name {fullName}</Text>
    <Text>description{description}</Text>
    <Text>language{language}</Text>
    <Text>Stars {stargazersCount}</Text>
    <Text>forks{forksCount}</Text>
    <Text>reviews{reviewCount}</Text>
    <Text>rating{ratingAverage}</Text>
  </View>
);

const RepositoryItem = (props) => {};

export default RepositoryItem;
