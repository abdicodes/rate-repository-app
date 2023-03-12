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

    // code bowrroed from https://stackblitz.com/edit/react-akapme?file=src%2FApp.js
    password: string()
      .min(8, 'Password must be 8 characters long')
      // .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      // .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .required('Username is required!'),
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
