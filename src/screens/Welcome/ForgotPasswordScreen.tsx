import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import DumbTextInput from '../../common/TextInput';

const ForgotPasswordScreen = () => {
  return (
    <View style={{ height: '100%', backgroundColor: 'white', padding: 10 }}>
      <Text style={{ width: '40%', fontWeight: 'bold', fontSize: 20 }}>Lorem Ipsum is simply dummy </Text>

      <Text style={{ marginTop: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>

      <DumbTextInput containerStyle={{ marginTop: 50 }} placeholder="Enter your phone number" />

      <Button text="Confirm" style={{ marginTop: 30 }} disabled fullWidth />
    </View>
  );
};

export default ForgotPasswordScreen;
