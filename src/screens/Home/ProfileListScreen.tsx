import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const datas = [
  {
    name: 'name 1',
  },
  {
    name: 'name 2',
  },
  {
    name: 'name 3',
  },
  {
    name: 'name 4',
  },
  {
    name: 'name 5',
  },
];

const ProfileListScreen = () => {
  return (
    <ScrollView
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          backgroundColor: 'green',
        },
      ]}>
      {datas.map(() => {
        return (
          <View style={{ padding: 20, height: '45%', width: '150%', backgroundColor: 'white' }}>
            <Image
              style={{ height: '70%', width: '100%' }}
              resizeMode="cover"
              source={require('../../common/img/profile_female.png')}
            />
            <Text>asd</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ProfileListScreen;
