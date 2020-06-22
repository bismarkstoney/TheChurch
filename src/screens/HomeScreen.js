import React from 'react';
import { StyleSheet, Text, View, Swiper } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'gray', flex: 1 }} />

      <View style={{ flex: 1 }}>
        <Swiper>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'red',
              justifyContent: 'center',
              height: Dimensions.get('window').height / 2,
            }}>
            <Text style={{ color: 'white' }}>Test</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'green',
              justifyContent: 'center',
              height: Dimensions.get('window').height / 2,
            }}>
            <Text style={{ color: 'white' }}>Test</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'blue',
              justifyContent: 'center',
              height: Dimensions.get('window').height / 2,
            }}>
            <Text style={{ color: 'white' }}>Test</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
