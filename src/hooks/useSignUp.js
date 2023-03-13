import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignUp = () => {
  const [signUpRequest, result] = useMutation(CREATE_USER);

  const signUp = async (values) => {
    return signUpRequest({
      variables: {
        user: { username: values.username, password: values.password },
      },
    });
  };

  return [signUp, result];
};

export default useSignUp;
