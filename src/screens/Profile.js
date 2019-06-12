import React,{Component} from "react";
import { View,ScrollView,Text } from "react-native";

import Container from "../components/Container";
import { Header } from "../components/Header";
import TextBox from "../components/Input/TextBox";

const TEMP_TEXT_NAME="Zahra";
const TEMP_TEXT_FAMILY="Nabi";
const TEMP_TEXT_COURSES="PAYE-FACE"

class Profile extends Component{
    render(){
        return(
            <Container>
                <View>
                    <TextBox text={TEMP_TEXT_NAME}/>
                    <TextBox text={TEMP_TEXT_FAMILY}/>
                    <TextBox text={TEMP_TEXT_COURSES}/>
                    <TextBox text={'family'}/>

                </View>
            </Container>
        )
    };
};

export default Profile;