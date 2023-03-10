import { AUTHENTICATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignIn = () => {
  const [loginAuth, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async (values) => {
    return loginAuth({
      variables: { credentials: values },
    });
  };

  return [signIn, result];
};

export default useSignIn;
