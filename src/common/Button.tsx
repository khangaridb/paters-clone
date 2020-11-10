import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import commonStyles from '../common/styles';

interface IProps {
  fullWidth?: boolean;
  width?: number;
  text: string | React.ReactNode;
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
    backgroundColor: commonStyles.colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: commonStyles.colors.white,
    fontSize: 18,
  },
  fullWidth: {
    width: '100%',
  },
  transparent: {
    borderColor: commonStyles.colors.white,
    borderWidth: 2,
    backgroundColor: 'transparent',
    color: commonStyles.colors.white,
  },
  rounded: {
    borderRadius: 20,
  },
  disabled: {
    backgroundColor: commonStyles.colors.primaryGrey,
    color: commonStyles.colors.white,
    fontWeight: 'bold',
  },
});

export default Button;
