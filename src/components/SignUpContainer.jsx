import SignUpForm from './SingUpForm';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { object, string, ref } from 'yup';

const SignUpContainer = ({ onSubmit }) => {
  const defaultValues = {
    username: '',
    password: '',
    confirm: '',
  };
  const loginSchema = object().shape({
    username: string()
      .min(5, 'username must contain at least 5 characters')
      .required('Username is required!'),

    password: string()
      .min(5, 'Password must contain at least 5 characters')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .required('Password is required!'),

    confirm: string()
      .oneOf([ref('password'), null], 'Must match "password" field value')
      .required('Password confirm is required!'),
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
          <SignUpForm isValid={isValid && dirty} onSubmit={handleSubmit} />
        )}
      </Formik>
    </View>
  );
};

export default SignUpContainer;
