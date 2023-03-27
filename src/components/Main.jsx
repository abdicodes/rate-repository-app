import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './Appbar';
import theme from '../theme';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import UserReviews from './UserReviews';

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
        <Route path="/create-review" element={<CreateReview />} exact />
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route path="/:id" element={<SingleRepository />} exact />
        <Route path="/user-reviews" element={<UserReviews />} exact />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
