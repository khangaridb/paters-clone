import React from 'react';
import { Dimensions, Image, ImageProps, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from '../../common/Button';

interface IBackgroundImage {
  bgSrc: ImageProps;
  imgSrc?: ImageProps;
}

interface IProps {
  navigation: any;
}

const WelcomeScreen = (props: IProps) => {
  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const { width: viewportWidth } = Dimensions.get('window');

  const backgroundImages: IBackgroundImage[] = [
    { bgSrc: require('../../common/img/splash_bg.png') },
    { bgSrc: require('../../common/img/splash_2_bg_img.png') },
    { bgSrc: require('../../common/img/splash_3_bg_img.png') },
    { bgSrc: require('../../common/img/splash_4_bg_img.png') },
    { bgSrc: require('../../common/img/splash_5_bg_img.png') },
  ];

  return (
    <>
      <Carousel
        data={backgroundImages}
        renderItem={({ item }: { item: IBackgroundImage }) => {
          return (
            <View style={{ flex: 1 }}>
              <Image source={item.bgSrc} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
            </View>
          );
        }}
        onSnapToItem={(index) => setCarouselIndex(index)}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        slideStyle={{ width: viewportWidth }}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />

      <View style={styles.buttonContainer}>
        <Pagination
          dotsLength={backgroundImages.length}
          activeDotIndex={carouselIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={{ width: 20, height: 20, borderRadius: 25, backgroundColor: 'white' }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

        <View>
          <Text style={[styles.textStyle, { fontSize: 14 }]}>Lorem Ipsum is simply dummy text of the printing</Text>
        </View>

        <Button text="Register" fullWidth rounded style={styles.buttonStyle} />
        <View>
          <Text style={[styles.textStyle]}>Lorem Ipsum is simply dummy text</Text>
        </View>
        <Button
          text="Login"
          transparent
          fullWidth
          rounded
          style={styles.buttonStyle}
          onPress={() => props.navigation.navigate('Login')}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={[styles.textStyle, { textDecorationLine: 'underline', textDecorationStyle: 'solid' }]}>
            Lorem ipsum text
          </Text>
          <Text style={[styles.textStyle, { textDecorationLine: 'underline' }]}>Lorem ipsum text</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paginationDot: {
    width: 13,
    height: 13,
    borderRadius: 8,
    marginHorizontal: -7,
    backgroundColor: '#57c896',
  },
  paginationContainer: {
    backgroundColor: 'transparent',
    alignContent: 'center',
    width: '100%',
    marginBottom: -20,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default WelcomeScreen;
