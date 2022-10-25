import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroumd,
    // ...
  },
  text: {
    // color: `#fffafa`,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
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
