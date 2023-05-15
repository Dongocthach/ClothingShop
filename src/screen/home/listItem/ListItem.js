import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Constants} from '../../../Constants';

const ListItem = ({item}) => {

  console.log('====================================');
  console.log(item);
  console.log('====================================');
  return (
 <View
    style={{
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      flexDirection:'row'
    }}
  >
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={require('../../../assett/Advertisement1.png')}
      />
      <View style={styles.below}>
        <View>
        </View>
        <View style={styles.groupText}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textPrice}>{item.price}</Text>
        </View>
        <View>
          <IconAntDesign
            name="hearto"
            size={25}
            color={Constants.COLOR.BLACK}
          />
        </View>
      </View>
    </View>
  </View>
   
  
  );
};

export default ListItem;
