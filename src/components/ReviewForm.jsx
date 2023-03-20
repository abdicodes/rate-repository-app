import { View, Pressable, Text, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    padding: 6,
    margin: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.buttonPrimary,
  },
  disabledButton: {
    backgroundColor: theme.colors.buttonDisabled,
  },
});
const ReviewForm = ({ onSubmit, isValid }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="repository's owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder=" rating" />
      <FormikTextInput name="review" placeholder="Your review ..." />
      <Pressable
        style={[styles.button, !isValid && styles.disabledButton]}
        onPress={onSubmit}
        disabled={!isValid}
      >
        <Text>Submit review</Text>
      </Pressable>
    </View>
  );
};
export default ReviewForm;
