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
const SignUpForm = ({ onSubmit, isValid }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Enter your username" />
      <FormikTextInput
        name="password"
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <FormikTextInput
        name="confirm"
        placeholder="Confirm your password"
        secureTextEntry={true}
      />
      <Pressable
        style={[styles.button, !isValid && styles.disabledButton]}
        onPress={onSubmit}
        disabled={!isValid}
      >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};
export default SignUpForm;
