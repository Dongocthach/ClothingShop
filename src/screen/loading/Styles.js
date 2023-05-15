import { StyleSheet} from 'react-native'
import { Constants } from '../../Constants'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

// Tính toán độ rộng của nút "SHOP NOW" là 80% chiều ngang của màn hình
const btnWidth = windowWidth * 0.8;


const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        flex:1,
    },
    body:{
        flex:3,
        width:"100%",
        alignItems:"center",
        justifyContent:"flex-end",

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
        marginBottom: 30,
      },
      textBtn: {
        color: Constants.COLOR.WHITE,
        fontWeight: "700",
        fontSize: 16,
      },

    //footer
    footer:{
        flex:1,
    },

})

export default Styles