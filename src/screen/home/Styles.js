import { ImageBackground, StyleSheet, Text, View  } from 'react-native'
import { Constants } from '../../Constants'
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

// Tính toán độ rộng của nút "SHOP NOW" là 80% chiều ngang của màn hình
const btnWidth = windowWidth * 0.8;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    header:{
        flex:1,
        width:"100%",
       
    },
    viewGroupHeader:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    viewGroupLeft:{

    },
    viewGroupRight:{
        flexDirection:"row",
    },
    viewVectorIcon:{
        marginEnd:20,
    },
  


    // body
    body:{
        flex:9,
        width:"100%",
        backgroundColor:"blue",

    },


    tabs:{
        flexDirection: 'row',
        backgroundColor:"red",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line:{
        width:30,
        height:2,
        backgroundColor:Constants.COLOR.BLACK,
        alignSelf: 'center',
        marginTop: 3,
    },
  
    })

export default Styles
 