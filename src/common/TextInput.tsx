import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  onChangeText?: (text: string) => void;
  fullWidth?: boolean;
  placeholder?: string;
  icon?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  underlined?: boolean;
}

const DumbTextInput = (props: IProps) => {
  const onChangeText = (text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View style={[styles.container, props.containerStyle && props.containerStyle]}>
      {props.icon && <Icon name={props.icon} style={styles.icon} />}
      <TextInput
        placeholder={props.placeholder || ''}
        style={[
          styles.default,
          props.fullWidth && styles.fullWidth,
          props.underlined && styles.underlined,
          props.style && props.style,
        ]}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  default: {
    height: 40,
    borderColor: '#cecece',
    color: '#c2c2c2',
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    fontSize: 20,
    marginRight: 15,
    color: '#999999',
  },
  fullWidth: {
    width: '100%',
  },
  underlined: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingBottom: 0,
    borderColor: '#cecece',
    textAlign: 'center',
  },
});

export default DumbTextInput;
