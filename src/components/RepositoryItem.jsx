import { FlatList, View, Text } from 'react-native';

const Item = ({ props }) => (
  <View>
    <Text>Full Name {props.fullName}</Text>
    <Text>description{props.description}</Text>
    <Text>language{props.language}</Text>
    <Text>Stars {props.stargazersCount}</Text>
    <Text>forks{props.forksCount}</Text>
    <Text>reviews{props.reviewCount}</Text>
    <Text>rating{props.ratingAverage}</Text>
  </View>
);

const RepositoryItem = (props) => {
  const renderItem = ({ item }) => <Item props={item} />;
  return (
    <FlatList
      data={props}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryItem;
