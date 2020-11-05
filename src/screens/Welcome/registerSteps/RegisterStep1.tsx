import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../common/Button';
import DumbTextInput from '../../../common/TextInput';

const RegisterStep1 = () => {
  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Birthday</Text>
      <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '30%' }}>
          <DumbTextInput
            icon="birthday-cake"
            underlined
            containerStyle={{ width: '100%' }}
            style={{ width: '100%' }}
            placeholder="1980"
          />
          <Text style={{ fontSize: 30, color: '#c2c2c2', paddingLeft: 10 }}>/</Text>
        </View>

        <View style={{ flexDirection: 'row', width: '30%', marginLeft: 10 }}>
          <DumbTextInput
            underlined
            containerStyle={{ width: '100%', marginLeft: 10 }}
            style={{ width: '100%' }}
            placeholder="01"
          />
          <Text
            style={{
              fontSize: 30,
              color: '#c2c2c2',
              paddingLeft: 10,
            }}>
            /
          </Text>
        </View>

        <View style={{ flexDirection: 'row', width: '30%', marginLeft: 10 }}>
          <DumbTextInput
            underlined
            containerStyle={{ width: '100%', marginLeft: 10 }}
            style={{ width: '100%' }}
            placeholder="01"
          />
        </View>
      </View>

      <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 16 }}>Gender</Text>
      <View style={styles.genderButtonContainer}>
        <Button text="MALE" rounded style={{ width: '40%' }} />
        <Button text="FEMALE" rounded disabled style={{ width: '40%' }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  genderButtonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'stretch',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default RegisterStep1;
