import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const DeviceFullHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container:{
        alignItems:'flex-end',
        width:DeviceFullWidth,
        paddingRight:20,
    },
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    logo:{
        width:60,
        marginBottom:10,
    },
    title:{
        fontSize:36,
        fontWeight:'700',
        fontFamily:'IRANSansMobile',
        color:'white',
        marginBottom:15,
    },
    text:{
        fontSize:14,
        fontFamily:'IRANSansMobile',
        color:'white',
    }
});

export default styles;