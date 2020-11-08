import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IItem {
  id: number;
  name: string;
  status: string;
  age: number;
}

const datas: IItem[] = [
  {
    id: 1,
    name: 'name 1',
    status: 'online',
    age: 22,
  },
  {
    id: 1,
    name: 'name 2',
    status: 'online',
    age: 25,
  },
  {
    id: 1,
    name: 'name 3',
    status: 'offline',
    age: 31,
  },
  {
    id: 1,
    name: 'name 4',
    status: 'offline',
    age: 28,
  },
  {
    id: 1,
    name: 'name 5',
    status: 'offline',
    age: 28,
  },
  {
    id: 1,
    name: 'name 6',
    status: 'offline',
    age: 28,
  },
  {
    id: 1,
    name: 'name 7',
    status: 'offline',
    age: 28,
  },
  {
    id: 1,
    name: 'name 8',
    status: 'offline',
    age: 28,
  },
];

const width = Dimensions.get('screen').width / 2 - 20;

const ProfileListScreen = () => {
  const renderItem = ({ item }: { item: IItem }) => {
    return (
      <View style={styles.item}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            style={{ height: '85%', width: '100%' }}
            resizeMode="cover"
            source={require('../../common/img/profile_female.png')}
          />
        </View>

        <View style={{ height: '20%', flexDirection: 'row', padding: 5 }}>
          <Text style={{ textAlignVertical: 'center', marginLeft: 5 }}>
            <Icon name="circle" style={{ color: item.status === 'online' ? 'green' : 'grey' }} />
          </Text>
          <Text style={{ marginLeft: 5 }}>{item.age}</Text>
          <Text style={{ marginLeft: 5 }}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        data={datas}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 10,
    width,
    height: width,
  },
});

export default ProfileListScreen;
