import React from 'react';
import { Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../common/Button';
import SelectInput from '../../common/SelectInput';
import DumbTextInput from '../../common/TextInput';
const labels = ['Birth info', 'Profile info', 'Password', 'SMS'];

const customStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 8,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#52c994',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#52c994',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#52c994',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#52c994',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#52c994',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#52c994',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#52c994',
  useNativeDriver: true,
};

interface IProps {
  navigation: any;
}

const RegisterScreen = (props: IProps) => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const renderContent = () => {
    if (currentStep === 0) {
      return (
        <View style={{ marginTop: 20 }}>
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
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignContent: 'stretch',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <Button text="MALE" rounded style={{ width: '40%' }} />
            <Button text="FEMALE" rounded disabled style={{ width: '40%' }} />
          </View>

          <Button fullWidth text="NEXT" style={{ marginTop: 60 }} onPress={() => setCurrentStep(currentStep + 1)} />
        </View>
      );
    }

    if (currentStep === 1) {
      return (
        <View style={{ marginTop: 20 }}>
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

          <Button fullWidth text="NEXT" style={{ marginTop: 60 }} onPress={() => setCurrentStep(currentStep + 1)} />
        </View>
      );
    }

    if (currentStep === 2) {
      return (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Phone</Text>
          <DumbTextInput icon="phone" underlined fullWidth placeholder="Phone number" style={{ textAlign: 'left' }} />
          <Text style={{ marginTop: 10, marginLeft: 30 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text
          </Text>

          <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Password</Text>
          <DumbTextInput icon="key" underlined fullWidth placeholder="Type password" style={{ textAlign: 'left' }} />

          <Button fullWidth text="NEXT" style={{ marginTop: 60 }} onPress={() => setCurrentStep(currentStep + 1)} />
        </View>
      );
    }

    if (currentStep === 3) {
      return (
        <View style={{ marginTop: 20 }}>
          <DumbTextInput icon="envelope" underlined fullWidth placeholder="******" style={{ textAlign: 'left' }} />
          <Text style={{ marginTop: 10, marginLeft: 30 }}>Enter sms text you have received on your phone</Text>

          <Button
            fullWidth
            text="Finish"
            style={{ marginTop: 60 }}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      );
    }
  };

  const getStepIndicatorIconConfig = ({ position }: { position: number; stepStatus: string }) => {
    const iconConfig = {
      name: '',
      color: '#ffffff',
      size: 25,
    };

    switch (position) {
      case 0: {
        iconConfig.name = 'birthday-cake';
        break;
      }
      case 1: {
        iconConfig.name = 'user';
        break;
      }
      case 2: {
        iconConfig.name = 'key';
        break;
      }
      case 3: {
        iconConfig.name = 'envelope';
        break;
      }
      default: {
        break;
      }
    }
    return iconConfig;
  };

  const renderStepIndicator = (params: any) => <Icon {...getStepIndicatorIconConfig(params)} />;

  return (
    <View style={{ backgroundColor: 'white', height: '100%', padding: 20 }}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        stepCount={labels.length}
        renderStepIndicator={renderStepIndicator}
        labels={labels}
      />

      {renderContent()}
    </View>
  );
};

export default RegisterScreen;
