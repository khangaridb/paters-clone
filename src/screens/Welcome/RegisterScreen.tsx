import React from 'react';
import { StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../common/Button';
import RegisterStep1 from './registerSteps/RegisterStep1';
import RegisterStep2 from './registerSteps/RegisterStep2';
import RegisterStep3 from './registerSteps/RegisterStep3';
import RegisterStep4 from './registerSteps/RegisterStep4';

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

  const nextButton = () => {
    if (currentStep === labels.length) {
      return (
        <Button fullWidth text="Finish" style={{ marginTop: 60 }} onPress={() => props.navigation.navigate('Login')} />
      );
    }

    return <Button fullWidth text="NEXT" style={styles.nextButton} onPress={() => setCurrentStep(currentStep + 1)} />;
  };

  const renderContent = () => {
    let stepComponent = <RegisterStep1 />;

    if (currentStep === 1) {
      stepComponent = <RegisterStep2 />;
    }

    if (currentStep === 2) {
      stepComponent = <RegisterStep3 />;
    }

    if (currentStep === 3) {
      stepComponent = <RegisterStep4 />;
    }

    return (
      <View style={styles.stepContainer}>
        {stepComponent}
        {nextButton()}
      </View>
    );
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

const styles = StyleSheet.create({
  stepContainer: {
    marginTop: 20,
  },
  nextButton: { marginTop: 60 },
});

export default RegisterScreen;
