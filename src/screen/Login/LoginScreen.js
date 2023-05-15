import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Constants} from '../../Constants';
import Styles from './Styles';

const LoginScreen = ({navigation}) => {

    const moveToRegister = () => {
        navigation.navigate('RegisterScreen');
    }
    const moveToHome = () => {
      navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assett/Advertisement1.png')}
          style={styles.imageBackground}>
            <View style={styles.viewIcon}>
              <IconFontAwesome
              name="angle-left"
              size={30}
              color={Constants.COLOR.WHITE}
            />

            </View>
            <View style={styles.groupViewText}>
              <View style={styles.viewText}>
                <Text style={styles.textHeaderTitle}>Welcome Back</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.textHeaderContent}>Yay! You're back! Thanks for shopping with us.
We have excited deals and promotions going on, grab your pick now! </Text>
              </View>
            </View>
            <View style={styles.viewLogo}>
              <Image source={require("../../assett/logo.png")}/>
            </View>
          
        </ImageBackground>
      </View>

      <View style={styles.body}>
        <View style={styles.viewTextLogin}>
          <Text style={styles.textLogin}>LOG IN</Text>
        </View>
        <View style={styles.groupBetween}>
          <View style={styles.item}>
            <View style={styles.viewText}>
              <Text style={Styles.textTitle}>EMAIL</Text>
            </View>
            <View style={styles.viewInput}>
              <IconMaterialIcons
                name="email"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
              <TextInput placeholder="abc@gmail.com" />
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.viewText}>
              <Text style={Styles.textTitle}>PASSWORD</Text>
            </View>
            <View style={styles.viewInput}>
              <IconIonicons
                name="person"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
              <TextInput placeholder="********" />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={moveToHome}>
          <View style={styles.viewBtn}>
            <Text style={styles.textBtn}>SHOP NOW</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.groupFooter}>
            <Text style={styles.textLeft}>
                Not registered yet?
            </Text>
            <TouchableOpacity onPress={moveToRegister}>
            <Text style={styles.textRight}>
                Create Account
            </Text>

            </TouchableOpacity>
          
        </View>
      </View>

    </View>
  );
};

export default LoginScreen;
