import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  //   const { dispatch } = useAuthStorage();
  const history = useNavigate();
  const appoloClient = useApolloClient();
  // ...

  const onSubmit = async (values) => {
    try {
      const { data } = await signUp(values);
      //   await dispatch({ type: 'LOGIN_SUCCESS', payload: data.authenticate });
      appoloClient.resetStore();

      history('/sign-in');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
