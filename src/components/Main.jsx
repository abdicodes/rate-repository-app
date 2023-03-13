import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositoryItemDetailed from './RepositoryItemDetailed';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './Appbar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route path="/:id" element={<RepositoryItemDetailed />} exact />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
