import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 0.5,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: Constants.statusBarHeight * 0.5,
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
  },
});

const AppBarTab = ({ children, uri }) => {
  return (
    <Pressable style={styles.tabs}>
      <Link to={uri}>
        <Text style={styles.text}>{children}</Text>
      </Link>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <Link to="/"> */}
      <AppBarTab uri="/">Repositories</AppBarTab>
      {/* </Link> */}
      {/* <Link to="/sign-in"> */}
      <AppBarTab uri="/sign-in">Sign in</AppBarTab>
      {/* </Link> */}
    </View>
  );
};

export default AppBar;
