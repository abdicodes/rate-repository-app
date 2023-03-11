// import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator,
  },
});

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,``
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  // const [repositories, setRepositories] = useState();
  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  // useEffect(() => {
  //   fetch('http://192.168.8.110:5001/api/repositories')
  //     .then((res) => res.json())
  //     .then((data) => setRepositories(data));
  // }, []);

  /* 
  Get the nodes from the edges array by mapping edges array to get the node object
  and put in array for displaying on our app.
  next 3 lines of code was borrowed from:
  https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/blob/source/src/content/10/en/part10c.md */

  // this will run ApolloGraphQL query to fetch data from server
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
  });

  const repositoryNodes =
    data && !loading ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
