import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface IProps {
  fullWidth?: boolean;
  width?: number;
  text: string;
  transparent?: boolean;
  style?: any;
  onPress?: () => void;
  rounded?: boolean;
  disabled?: boolean;
}

const Button = (props: IProps) => {
  return (
    <Pressable
      onPress={props.onPress && props.onPress}
      style={[
        styles.default,
        props.fullWidth && styles.fullWidth,
        props.transparent && styles.transparent,
        props.style && props.style,
        props.rounded && styles.rounded,
        props.disabled && styles.disabled,
      ]}>
      <Text style={[styles.text]}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: '#57c896',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  fullWidth: {
    width: '100%',
  },
  transparent: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    color: 'white',
  },
  rounded: {
    borderRadius: 20,
  },
  disabled: {
    backgroundColor: '#efefef',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
