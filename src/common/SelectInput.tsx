import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IItem {
  label: string;
  value: string;
}

interface IProps {
  items: IItem[];
  icon?: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (item: IItem) => void;
  textStyle: StyleProp<TextStyle>;
}

const SelectInput = (props: IProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<IItem | null>(null);

  const onChange = (item: IItem) => {
    setSelectedItem(item);

    if (props.onChange) {
      props.onChange(item);
    }

    setVisible(!visible);
  };

  const renderText = () => {
    if (selectedItem) {
      return <Text style={[styles.text, props.textStyle && props.textStyle]}>{selectedItem.label}</Text>;
    }

    if (props.placeholder) {
      return <Text style={[styles.text, props.textStyle && props.textStyle]}>{props.placeholder}</Text>;
    }

    return <Text style={[styles.text, props.textStyle && props.textStyle]}>Click to select...</Text>;
  };

  return (
    <>
      <Pressable
        style={[styles.container, props.containerStyle && props.containerStyle]}
        onPress={() => setVisible(!visible)}>
        {props.icon && <Icon name={props.icon} style={styles.frontIcon} />}
        {renderText()}
        <Icon name="angle-down" style={styles.backIcon} />
      </Pressable>

      <Modal
        testID={'modal'}
        useNativeDriver={true}
        isVisible={visible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={() => setVisible(!visible)}>
        <View style={{ backgroundColor: 'white' }}>
          <Pressable
            onPress={() => setVisible(!visible)}
            style={{
              justifyContent: 'center',
              height: 40,
              borderBottomColor: '#c2c2c2',
              borderBottomWidth: 1,
              alignItems: 'flex-end',
            }}>
            <Text style={{ paddingRight: 10, color: '#c2c2c2' }}>close</Text>
          </Pressable>

          <View>
            {props.items.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => onChange(item)}
                  style={{
                    height: 40,
                    borderBottomColor: '#c2c2c2',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    padding: 10,
                  }}>
                  <Text style={{ fontSize: 16 }}>{item.label}</Text>

                  {selectedItem && selectedItem.value === item.value ? (
                    <Icon name="check" style={{ fontSize: 16, color: 'green' }} />
                  ) : (
                    <Text />
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    padding: 10,
    alignItems: 'flex-end',
  },
  frontIcon: {
    fontSize: 20,
    marginRight: 15,
    color: '#999999',
  },
  backIcon: {
    fontSize: 25,
    marginLeft: 15,
    color: '#999999',
  },
  text: {
    color: '#c2c2c2',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelectInput;
