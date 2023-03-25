import SignInForm from './SignInForm';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { object, string } from 'yup';

const SignInContainer = ({ onSubmit }) => {
  const defaultValues = {
    username: '',
    password: '',
  };
  const loginSchema = object().shape({
    username: string()
      .min(5, 'username must contain at least 5 characters')
      .required('Username is required!'),
    password: string()
      .min(5, 'Password must be 5 characters long')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .required('Password is required!'),
  });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexGrow: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={defaultValues}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <SignInForm isValid={isValid && dirty} onSubmit={handleSubmit} />
        )}
      </Formik>
    </View>
  );
};

export default SignInContainer;
