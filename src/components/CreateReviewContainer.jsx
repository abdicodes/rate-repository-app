import ReviewForm from './ReviewForm';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { object, string, number } from 'yup';

const SignUpContainer = ({ onSubmit }) => {
  const defaultValues = {
    ownerNmae: '',
    repositoryName: '',
    rating: '',
    review: '',
  };
  const loginSchema = object().shape({
    ownerNmae: string().required('Owner name is required!'),

    repositoryName: string().required('Repository name is required!'),

    rating: number()
      .integer('you can only users integers')
      .number.min(0, 'you can only use positive numbers')
      .max(100, 'rating cannot be over 100')
      .required('rating is required!'),
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
          <ReviewForm isValid={isValid && dirty} onSubmit={handleSubmit} />
        )}
      </Formik>
    </View>
  );
};

export default SignUpContainer;
