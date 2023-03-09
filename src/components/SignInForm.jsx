import { View, Pressable, Text } from 'react-native';
import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Enter your username" />
      <FormikTextInput name="password" placeholder="Enter your password" />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};
export default SignInForm;
