import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 0.5,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: Constants.statusBarHeight * 0.5,
    paddingLeft: 10,

    // ...
  },
  text: {
    color: theme.colors.buttonText,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={{ flexDirection: 'row' }}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
