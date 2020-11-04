import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../../common/Button';
import DumbTextInput from '../../common/TextInput';

interface IProps {
  navigation: any;
}

const LoginScreen = (props: IProps) => {
  return (
    <View style={{ justifyContent: 'space-between', height: '100%', backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        <View>
          <Text style={styles.headerText}>Lorem Ipsum</Text>
          <Text style={styles.headerText}>Lorem Ipsum is</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <DumbTextInput fullWidth placeholder="Username" />

          <View style={{ marginTop: 5 }}>
            <DumbTextInput fullWidth placeholder="Password" />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button disabled text="Login" fullWidth />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 15 }}>
            <Text>Forgot password?</Text>
            <Text style={{ color: 'green', textDecorationLine: 'underline' }}> Click here</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderColor: '#efefef',
          height: 40,
          padding: 10,
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => props.navigation.navigate('Register')}>
          <Text style={{ color: 'green', textDecorationLine: 'underline' }}> Register here</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
