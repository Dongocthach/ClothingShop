import { ImageBackground, StyleSheet, Text, View } from 'react-native'
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
        flex:5,
        width:"100%",
       
    },
    imageBackground:{
      flex:1, 
      width:"100%",
      justifyContent:"space-between",
    },
    viewIcon:{
        padding:10,
    },
    groupViewText:{
        marginStart:20,
        marginEnd:20,

    },
    viewText:{
    },
    textHeaderTitle:{
        color:Constants.COLOR.WHITE,
        fontSize:25,
        fontWeight:"700",

    },
    textHeaderContent:{
        color:Constants.COLOR.WHITE,
        fontSize:16,

    },
    viewLogo:{
        alignItems:"flex-end",
        paddingEnd:5,
        paddingBottom:5,
    },


    // body
    body:{
        flex:6,
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",

    },
    groupBetween:{
        width:"100%",
    },
    textLogin:{
        fontSize:18,
        fontWeight:"700",
        color:Constants.COLOR.BLACK,
    },
    viewText:{
        paddingBottom:5,
        
    },
    textTitle:{
        fontSize:16,
        color:Constants.COLOR.BLACK,
    },
    item:{
        padding:10,
    },
    viewInput:{
        width:"100%",
        backgroundColor:Constants.COLOR.WHITE,
        borderWidth:1,
        borderColor:Constants.COLOR.STROKEBTN,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        paddingStart:10,
    },
    viewBtn: {
        width:btnWidth,
        backgroundColor: Constants.COLOR.FILLBTN,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        borderWidth: 2,
        borderColor: Constants.COLOR.STROKEBTN,
        borderRadius: 20,
      },
      textBtn: {
        color: Constants.COLOR.WHITE,
        fontWeight: "700",
        fontSize: 16,
      },
      groupFooter:{
        flexDirection:"row",
      },
      textLeft:{

      },
      textRight:{
        color:"blue"
      },

      // fotter
    
})

export default Styles
