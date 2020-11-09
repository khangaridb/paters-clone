import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../common/Button';
import commonStyles from '../../common/styles';
import DumbTextInput from '../../common/TextInput';
import { useAppDispatch } from '../../common/utils';
import { login } from '../../redux/slices/authSlice';

interface IProps {
  navigation: any;
}

interface IFormValues {
  username: string;
  password: string;
}

const LoginScreen = (props: IProps) => {
  const { handleSubmit, register, setValue, formState } = useForm<IFormValues>({ mode: 'onChange' });
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    register({ name: 'username' }, { required: true });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const onSubmit = async (data: IFormValues) => {
    const result = await dispatch(login({ ...data }));

    unwrapResult(result);

    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={commonStyles.styles.fullHeightContainer}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1 }}>
          <View>
            <Text style={styles.headerText}>Lorem Ipsum</Text>
            <Text style={styles.headerText}>Lorem Ipsum is</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <DumbTextInput fullWidth placeholder="Username" onChangeText={(text) => setValue('username', text)} />
            {formState.errors.username && <Text style={{ color: 'red' }}>* Please enter username</Text>}

            <View style={{ marginTop: 5 }}>
              <DumbTextInput fullWidth placeholder="Password" onChangeText={(text) => setValue('password', text)} />
              {formState.errors.password && <Text style={{ color: 'red' }}>* Please enter password</Text>}
            </View>

            <View style={{ marginTop: 15 }}>
              <Button text="Login" fullWidth onPress={handleSubmit(onSubmit)} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 15 }}>
              <Text>Forgot password?</Text>
              <Pressable onPress={() => props.navigation.navigate('ForgotPassword')}>
                <Text style={commonStyles.styles.underLineText}> Click here</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => props.navigation.navigate('Register')}>
          <Text style={commonStyles.styles.underLineText}> Register here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    borderColor: '#efefef',
    height: 40,
    padding: 10,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default LoginScreen;
