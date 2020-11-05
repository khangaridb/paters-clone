import React from 'react';
import { Text } from 'react-native';
import SelectInput from '../../../common/SelectInput';
import DumbTextInput from '../../../common/TextInput';

const RegisterStep2 = () => {
  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Username</Text>
      <DumbTextInput icon="user" underlined fullWidth placeholder="Username" style={{ textAlign: 'left' }} />
      <Text style={{ marginTop: 10, marginLeft: 30 }}>Lorem ipsum dollar sign</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Location</Text>

      <SelectInput
        icon="map-pin"
        items={[
          { label: 'Location 1', value: '1' },
          { label: 'Location 2', value: '2' },
          { label: 'Location 3', value: '3' },
          { label: 'Location 4', value: '4' },
        ]}
        containerStyle={{ marginTop: 10 }}
        textStyle={{ width: '40%' }}
        placeholder="Select location"
      />
    </>
  );
};

export default RegisterStep2;
