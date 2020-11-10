import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../common/Button';
import { IUser } from '../Home/ProfileListScreen';

interface IProps {
  route: {
    params: {
      user: IUser;
    };
  };
}

const backgroundImages = [
  { bgSrc: require('../../common/img/splash_bg.png') },
  { bgSrc: require('../../common/img/splash_2_bg_img.png') },
  { bgSrc: require('../../common/img/splash_3_bg_img.png') },
  { bgSrc: require('../../common/img/splash_4_bg_img.png') },
  { bgSrc: require('../../common/img/splash_5_bg_img.png') },
];

const { width: viewportWidth, height } = Dimensions.get('window');

const UserDetailScreen = (props: IProps) => {
  const routeParams = props.route.params;
  const { user } = routeParams;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: height / 1.78, flexDirection: 'column' }}>
          <Carousel
            data={backgroundImages}
            renderItem={({ item }: { item: any }) => {
              return (
                <View style={{ flex: 1 }}>
                  <View>
                    <Image source={item.bgSrc} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
                  </View>

                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      margin: 20,
                      flexDirection: 'column',
                    }}>
                    <Text style={{ color: 'white', fontSize: 22 }}>mayu 24 dummy text</Text>
                    <Text style={{ color: 'white' }}>Lorem ipsum dummy text</Text>
                  </View>
                </View>
              );
            }}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            slideStyle={{ width: viewportWidth }}
          />

          <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="heart-o" style={{ fontSize: 18 }} />
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>120 likes!</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="circle" style={{ color: user.status === 'online' ? 'green' : 'grey', fontSize: 18 }} />
              <Text style={{ textAlignVertical: 'center', marginLeft: 5, fontSize: 18 }}>
                {user.status === 'online' ? 'online' : 'offline'}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row' }}>
          <Image
            source={require('../../common/img/splash_bg.png')}
            resizeMode="cover"
            style={{ width: 100, height: 100 }}
          />

          <Image
            source={require('../../common/img/splash_bg.png')}
            resizeMode="cover"
            style={{ width: 100, height: 100, marginLeft: 5 }}
          />
        </View>

        <Text style={{ margin: 20, fontSize: 20 }}>Dummy text</Text>

        <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', height: 300 }} />
      </ScrollView>

      <LinearGradient
        colors={['transparent', 'transparent', 'white']}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ padding: 20, flexDirection: 'row' }}>
          <Button
            text={
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="heart-o" style={{ fontSize: 15, color: 'white' }} />
                <Text style={{ fontSize: 15, paddingLeft: 5, color: 'white' }}>LIKE</Text>
              </View>
            }
            style={{ flex: 0.8 }}
          />
          <Button
            style={{ marginLeft: 20, flex: 0.2 }}
            text={<Icon name="envelope-o" style={{ color: 'white', fontSize: 20 }} />}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default UserDetailScreen;
