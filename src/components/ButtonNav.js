import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import User from '../assets/svg/user.svg'
import Book from '../assets/svg/book.svg'
import Star from '../assets/svg/star.svg'
import Bell from '../assets/svg/bell.svg'


const GUTTER = 15;

function ButtonNav() {
    
    return (
        <View style={{padding: GUTTER, flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{alignItems: "center"}}>
                <User 
                    width={24} 
                    height={24} 
                    fill={defaultColor} 
                    onPress={() => {
                    navigation.navigate('Profile');
                }}
                />
                <Text>Cá nhân</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Book width={24} height={24} fill={defaultColor} />
                <Text>Tất cả</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Star width={24} height={24} fill={defaultColor} />
                <Text>Đang học</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Bell width={24} height={24} fill={defaultColor} />
                <Text>Thông báo</Text>
            </View>
            
        </View>
    );
}

export default ButtonNav;