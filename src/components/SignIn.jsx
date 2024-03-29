import useSignIn from '../hooks/useSignIn';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import SignInContainer from './SignInContainer';

const SignIn = () => {
  const [signIn] = useSignIn();
  const { dispatch } = useAuthStorage();
  const history = useNavigate();
  const appoloClient = useApolloClient();
  // ...

  const onSubmit = async (values) => {
    try {
      const { data } = await signIn(values);
      await dispatch({ type: 'LOGIN_SUCCESS', payload: data.authenticate });
      appoloClient.resetStore();

      history('/repositories');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
