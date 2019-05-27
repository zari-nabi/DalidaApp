import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const DeviceFullHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      alignSelf:'stretch',
    },
    imageBackground:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:DeviceFullHeight,
        height:DeviceFullHeight,
    },
    touchContainer:{
        backgroundColor:'#f1f1f1',
        opacity:0.6,
        borderRadius:20,
        width:DeviceFullWidth/2.5,
        height:DeviceFullHeight/6,
        padding:15,
        margin:5,
    },
    imageIcon:{
        width:50,
        height:50,
    },
    viewTextInput: {
        flex:1,
        justifyContent:'center',
        paddingTop: 8,
        paddingHorizontal:20,
        alignSelf:'stretch',
        width:DeviceFullWidth,
    },

    textInput: {
        fontSize: 15,
        backgroundColor:'white',
        opacity:0.8,
        borderRadius:10,

    },
    logoTitle:{
        fontSize:40,
        color:'orange',
fontWeight:'bold',
    }

});

export default styles;