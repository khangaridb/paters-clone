import React from 'react';
import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface IUser {
  id: number;
  name: string;
  status: string;
  age: number;
}

interface IProps {
  navigation: any;
}

const datas: IUser[] = [
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

const ProfileListScreen = (props: IProps) => {
  const renderItem = ({ item }: { item: IUser }) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() =>
          props.navigation.navigate('UserDetail', {
            user: item,
          })
        }>
        <View style={{ justifyContent: 'center', height: '85%' }}>
          <Image
            style={{ height: '100%', width: '100%' }}
            resizeMode="cover"
            source={require('../../common/img/profile_female.png')}
          />
        </View>

        <View
          style={{
            height: '15%',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
          }}>
          <Text style={{ textAlignVertical: 'center', marginLeft: 5 }}>
            <Icon name="circle" style={{ color: item.status === 'online' ? 'green' : 'grey' }} />
          </Text>
          <Text style={{ marginLeft: 5 }}>{item.age}</Text>
          <Text style={{ marginLeft: 5 }}>{item.name}</Text>
        </View>
      </Pressable>
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
