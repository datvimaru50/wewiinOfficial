import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import ButtonNav from './ButtonNav';
import ListAllCourse from './ListAllCourse';
import Profile from './Profile';

import User from '../assets/svg/user.svg'
import Book from '../assets/svg/book.svg'
import Star from '../assets/svg/star.svg'
import Bell from '../assets/svg/bell.svg'


const GUTTER = 15;

export default function Dashboard() {
    // let [defaultColor, setDefaultColor] = useState("#000");

    const defaultColor = "#000";
    const activeColor = "#ff7f45";

    let [active, setActive] = useState("all");

    function getColor(name) {
        return active === name ? activeColor : defaultColor;
    }

  return (
        <View style={{flex: 1}}>
            <ScrollView>
                {
                    active === "all" &&
                    <ListAllCourse />
                }
                {
                    active === "profile" &&
                    <Profile />
                }
            </ScrollView>



            <View style={styles.buttonBarContainer}>

                <TouchableOpacity  onPress={()=>setActive("profile")} style={styles.buttonItem}>
                    <User 
                        width={24} 
                        height={24} 
                        fill={getColor("profile")} 
                    />
                    <Text style={{color: getColor("profile")}}>Cá nhân</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>setActive("all")} style={styles.buttonItem}>
                    <Book 
                        width={24} 
                        height={24} 
                        fill={getColor("all")}
                    />
                    <Text style={{color: getColor("all")}}>Tất cả</Text>
                </TouchableOpacity>

                <View style={{alignItems: "center"}}>
                    <Star width={24} height={24} fill={defaultColor} />
                    <Text>Đang học</Text>
                </View>

                <View style={{alignItems: "center"}}>
                    <Bell width={24} height={24} fill={defaultColor} />
                    <Text>Thông báo</Text>
                </View>
                
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    buttonBarContainer: {
        padding: GUTTER, 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    buttonItem: {
        alignItems: "center"
    }
  });


