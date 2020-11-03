import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface IProps {
  onChangeText?: (text: string) => void;
  fullWidth?: boolean;
  placeholder?: string;
}

const DumbTextInput = (props: IProps) => {
  const onChangeText = (text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View>
      <TextInput
        placeholder={props.placeholder || ''}
        style={[styles.default, props.fullWidth && styles.fullWidth]}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    height: 40,
    borderColor: '#848484',
    color: '#848484',
    borderWidth: 1,
    backgroundColor: '#efefef',
    padding: 10,
  },
  fullWidth: {
    width: '100%',
  },
});

export default DumbTextInput;
