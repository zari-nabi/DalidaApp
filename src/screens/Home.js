import React, { Component } from "react";
import { View, KeyboardAvoidingView,  StatusBar, FlatList,ScrollView } from "react-native";
import PropTypes from "prop-types";

import Container from "../components/Container";
import { ImageBackgrounds } from "../components/Images";
import { Buttons, ButtonImage } from "../components/Buttons";
import { InputBox, InputWithButton } from "../components/Input";
import { Logo,LogoWithText } from "../components/Logo";
import { Cards } from "../components/Cards";

const items = [
    {
        key: '1',
        title: 'آموزش همراه مربی',
        image: '../assets/images/tutorial.png',
    },
    {
        key: '2',
        title: 'گالری تصاویر',
        image: '../assets/images/gallery.png',
    },
   
    {
        key: '3',
        title: 'درباره دالیدا',
        image: '../assets/images/dalida.png',
    }
];

const TEMP_BUTTON_SEARCH = 'Search';
const TEMP_INPUT_TEXT = 'چی دوست داری یاد بگیری؟';
const TEMP_LOGO_TITLE = 'Dalida';
const TEMP_LOGO_TEXT = 'خودآموز حرفه ای نقاشی';
const TEMP_CARD_TITLE='در 30 جلسه طراحی رو یاد بگیر!';
const TEMP_CARD_TEXT='بر اساس یک برنامه آموزشی هدفمند می تونی نقاشی رو از پایه شروع کنی و تا طراحی چهره پیشرفته ادامه بدی';
const TEMP_BUTTON_TEXXT = 'شروع!'

class Home extends Component {
    static propTypes={
        navigation:PropTypes.object,
    }
    handlePressSearch = () => {
        console.log('press search');
        this.props.navigation.navigate('CourseList',{title:'دوره ها'});
    }

    handleTextChange = () => {
        console.log('textchange', text);
    }

    handlePress = () => {
        console.log('press button');
        this.props.navigation.navigate('Options',{title:'تنظیمات'});
    }

    render() {
        return (
            <Container>
                <ImageBackgrounds>
                    {/* <KeyboardAvoidingView behavior='padding'> */}
                    <View style={{ flex: 1 }}>
                        <InputWithButton
                            buttonText={TEMP_BUTTON_SEARCH}
                            text={TEMP_INPUT_TEXT}
                            onPress={(this.handlePressSearch)}
                            onTextChange={this.handleTextChange}
                            iconName='search' />
                    </View>
                    <View style={{ flex: 2 }}>
                        <LogoWithText title={TEMP_LOGO_TITLE} text={TEMP_LOGO_TEXT} />
                    </View>

                    {/* <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item.name}
                            selected={item.id === this.props.groupState.currentSelectedGroup[0]}
                            onPress={() => this.handlePressItem(item)}
                            visible={true}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={HorizontalThinSeparator}
                /> */}
               
                    <ScrollView  showsHorizontalScrollIndicator={false} style={{  flex:1, paddingHorizontal:120, marginBottom:30}} horizontal={true}>
                        <View style={{ width:1000,flex:1,flexDirection:'row',alignContent:'center', alignItems:'center',justifyContent:'center'}}> 
                        <FlatList
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            initialScrollIndex={0}
                            data={items}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) =>
                             <ButtonImage
                              title={item.title}
                               text={item.title}
                                imageSource={require('../assets/images/home.jpg')}
                                onPress={this.handlePress} />}
                        />
                    </View>
                    </ScrollView>

                    {/* <View style={{flex:1}}>
                        <Cards
                        title={TEMP_CARD_TITLE}
                        text={TEMP_CARD_TEXT}
                        textBtn={TEMP_BUTTON_TEXXT}
                        isButton={true}
                        />
                    </View> */}
{/* </KeyboardAvoidingView> */}
                </ImageBackgrounds>

            </Container>
        );
    }
}

export default Home;