import SignInForm from './SignInForm';
import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

// const SignIn = () => {
//   return <Text>The sign-in view</Text>;
// };

export default SignIn;
