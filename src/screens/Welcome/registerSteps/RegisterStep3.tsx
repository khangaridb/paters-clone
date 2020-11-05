import React from 'react';
import { Text } from 'react-native';
import DumbTextInput from '../../../common/TextInput';

const RegisterStep3 = () => {
  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Phone</Text>
      <DumbTextInput icon="phone" underlined fullWidth placeholder="Phone number" style={{ textAlign: 'left' }} />
      <Text style={{ marginTop: 10, marginLeft: 30 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Password</Text>
      <DumbTextInput icon="key" underlined fullWidth placeholder="Type password" style={{ textAlign: 'left' }} />
    </>
  );
};

export default RegisterStep3;
