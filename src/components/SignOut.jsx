// I borrowed basic Alert dialouge from https://reactnative.dev/docs/alert

import React from 'react';
import { StyleSheet, Text, Alert, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import AuthStorage from '../utils/authStorage';
import theme from '../theme';
import { useApolloClient } from '@apollo/client';

const authStorage = new AuthStorage();
const SignOut = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const navigateCallBack = async () => {
    await authStorage.clearToken();
    apolloClient.resetStore();

    navigate('/sign-in');
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Sign out',
      'Are you sure you want to sign out from this amazing app',
      [
        {
          text: 'No',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: navigateCallBack },
      ]
    );

  return (
    <Pressable style={styles.tabs} onPress={createTwoButtonAlert}>
      <Text style={styles.text}>Sign Out</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default SignOut;
