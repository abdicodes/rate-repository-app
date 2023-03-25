import ReviewForm from './ReviewForm';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { object, string, number } from 'yup';

const CreateReviewContainer = ({ onSubmit }) => {
  const defaultValues = {
    rating: '',
    repositoryName: '',
    ownerName: '',
    text: '',
  };

  // schema for validating form input using yup library
  const reviewSchema = object().shape({
    rating: number()
      .integer('you can only users integers')
      .min(0, 'you can only use positive numbers')
      .max(100, 'rating cannot be over 100')
      .required('rating is required!'),
    repositoryName: string().required('Repository name is required'),
    ownerName: string().required('owner name is required'),
    text: string(),
  });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexGrow: 1,
    },
  });

  return (
    //using isValid and dirty props to check for input errors.
    <View style={styles.container}>
      <Formik
        initialValues={defaultValues}
        onSubmit={onSubmit}
        validationSchema={reviewSchema}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <ReviewForm isValid={isValid && dirty} onSubmit={handleSubmit} />
        )}
      </Formik>
    </View>
  );
};

export default CreateReviewContainer;
