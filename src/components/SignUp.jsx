import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();
  const appoloClient = useApolloClient();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
      appoloClient.resetStore();
      navigate('/sign-in');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
