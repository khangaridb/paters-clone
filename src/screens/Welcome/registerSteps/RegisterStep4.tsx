import React from 'react';
import { Text } from 'react-native';
import DumbTextInput from '../../../common/TextInput';

const RegisterStep4 = () => {
  return (
    <>
      <DumbTextInput icon="envelope" underlined fullWidth placeholder="******" style={{ textAlign: 'left' }} />
      <Text style={{ marginTop: 10, marginLeft: 30 }}>Enter sms text you have received on your phone</Text>
    </>
  );
};

export default RegisterStep4;
