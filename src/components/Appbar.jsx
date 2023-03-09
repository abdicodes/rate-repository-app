import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab route="/">Repositories</AppBarTab>
        <AppBarTab route="/sign-in">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
