import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const DeviceFullHeight = Dimensions.get('window').height;

const HEIGHT_BUTTON=45;


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'black',
        opacity:0.7,
        borderRadius:20,
        width:DeviceFullWidth/1.5,
        height:DeviceFullHeight/5,
        padding:10,
        marginHorizontal:5,
    },
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:DeviceFullWidth/1.6,
        height:DeviceFullHeight/5.5,
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        margin:5,
    },
    title:{
        fontSize:14,
        fontFamily:'IRANSansMobile_Bold',
         color:'white',
    },
    text:{
        fontSize:14,
        fontFamily:'IRANSansMobile',

        // color:'white',
    },
    touchContainer:{
            alignItems:'center',
            justifyContent:'space-around',
            backgroundColor:'#0ca798',
            borderRadius:20,
            width:'90%',
            height:HEIGHT_BUTTON,
            padding:10,
            margin:5,
            }
});

export default styles;