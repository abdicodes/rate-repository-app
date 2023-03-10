/* parts of this code are borrowed from 
https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/blob/source/src/content/10/en/part10b.md 
and have been further expanded on. 
*/

import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
  basic: {
    // marginHorizontal: 5,
    // paddingHorizontal: 5,
    minWidth: 200,
    maxWidth: 200,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    margin: 10,
    borderRadius: 4,
    elevation: 3,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
  },
});

//custom TextInput component to redunce redundency.
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.basic, style];

  return (
    <View>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
