import { ImageBackground, StyleSheet, Text, View  } from 'react-native'
import { Dimensions } from 'react-native';
import { Constants } from '../../../Constants';






const Styles = StyleSheet.create({
  image:{
    width:160,
    height:140,
  },
  below:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"red",
    height:50,
  },
  textName:{
    color:Constants.COLOR.BLACK
    

  },
  textPrice:{
    color:Constants.COLOR.BLACK


  },
  groupText:{
    alignItems: 'center',
  },
  item:{
  },
  
  
    })

export default Styles
 