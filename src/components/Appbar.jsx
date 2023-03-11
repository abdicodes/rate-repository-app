import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import SignOut from './SignOut';
import { useQuery } from '@apollo/client';
import { IS_SIGNED_IN } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 0.2,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: Constants.statusBarHeight * 0.2,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    // ...
  },
  text: {
    color: theme.colors.buttonText,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  tabs: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

const AppBarTab = ({ children, route }) => {
  return (
    <Pressable style={styles.tabs}>
      <Link to={route}>
        <Text style={styles.text}>{children}</Text>
      </Link>
    </Pressable>
  );
};

const AppBar = () => {
  const { data } = useQuery(IS_SIGNED_IN, {
    //to avoid caching issues.
    fetchPolicy: 'cache-and-network',
  });
  console.log(data.me);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.me && <AppBarTab route="/">Repositories</AppBarTab>}
        {!data.me && <AppBarTab route="/sign-in">Sign in</AppBarTab>}
        {data.me && <SignOut />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
