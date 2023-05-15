import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React from 'react';
  import styles from './Styles';
  import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
  import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import {Constants} from '../../Constants';
  import Styles from './Styles';

const RegisterScreen = ({navigation}) => {
    const moveToLogin = () => {
        navigation.navigate('LoginScreen')
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assett/Advertisement1.png')}
          style={styles.imageBackground}>
          <IconFontAwesome
            name="angle-left"
            size={20}
            color={Constants.COLOR.WHITE}
          />
        </ImageBackground>
      </View>

      <View style={styles.body}>
        <View style={styles.viewTextLogin}>
          <Text style={styles.textLogin}>REGISTER</Text>
        </View>
        <View style={styles.groupBetween}>
          <View style={styles.item}>
            <View style={styles.viewText}>
              <Text style={Styles.textTitle}>NAME</Text>
            </View>
            <View style={styles.viewInput}>
              <IconMaterialIcons
                name="email"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
              <TextInput placeholder="Tran Van A" />
            </View>
          </View>
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
              <IconMaterialIcons
                name="email"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
              <TextInput placeholder="********" />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={moveToLogin}>
          <View style={styles.viewBtn}>
            <Text style={styles.textBtn}>SHOP NOW</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.groupFooter}>
            <Text style={styles.textLeft}>
            By  joining I agree to receive emails from Bajuku.
            </Text>
            
          
        </View>
      </View>

    </View>
  );
}

export default RegisterScreen
