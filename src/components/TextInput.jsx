/* parts of this code are borrowed from 
https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/blob/source/src/content/10/en/part10b.md 
and have been further expanded on. 
*/

import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

//custom TextInput component to redunce redundency.
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
