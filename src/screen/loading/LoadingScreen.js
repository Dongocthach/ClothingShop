import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from './Styles';


const LoadingScreen = ({navigation}) => {
  const moveToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assett/bgLoading.png')}
        style={styles.imageBackground}>
        <View style={styles.body}>
        <TouchableOpacity onPress={moveToLogin}>

          <View style={styles.viewBtn}>
              <Text style={styles.textBtn}>SHOP NOW</Text>
          </View>
          </TouchableOpacity>

        </View>
        <View style={styles.footer}></View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
