import { StyleSheet,Dimensions } from "react-native";

const DeviceFullWidth = Dimensions.get('window').width;
const DeviceFullHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      width:DeviceFullWidth,
    },
    containerListH: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width:DeviceFullWidth*2,
      },
});

export default styles;