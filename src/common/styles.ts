import { StyleProp, TextStyle, ViewStyle } from 'react-native';

const commonStyles: {
  colors: {
    primaryGreen: string;
    white: string;
    primaryGrey: string;
  };
  styles: {
    underLineText: StyleProp<TextStyle>;
    fullHeightContainer: StyleProp<ViewStyle>;
  };
} = {
  colors: {
    primaryGreen: '#5cc797',
    white: '#fff',
    primaryGrey: '#eaeaea',
  },
  styles: {
    underLineText: {
      color: 'green',
      textDecorationLine: 'underline',
    },
    fullHeightContainer: {
      backgroundColor: 'white',
      height: '100%',
    },
  },
};

export default commonStyles;
