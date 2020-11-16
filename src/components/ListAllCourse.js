import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonNav from './ButtonNav';


const GUTTER = 15;

function ListAllCourse({navigation}) {
    return(
        <>
            <Text style={styles.courseGroupTitle}>Khóa học NN</Text>

            <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                <CourseItem 
                    name="Khóa học 1" 
                    desc="Khóa học nhập môn Tiếng Anh cho người mất gốc" 
                    color="red"
                    navigation={navigation}
                />
                <CourseItem 
                    name="Khóa học 2" 
                    color="red"
                    desc="Khóa học HSK 6"
                    navigation={navigation} 
                />
                <CourseItem 
                    name="Khóa học 3" 
                    color="red"
                    desc="Khóa học tiếng Nhật N3" 
                    navigation={navigation}
                />
            </ScrollView>

            <Text style={styles.courseGroupTitle}>Chuyên ngành</Text>

            <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                <CourseItem name="Khóa học 4" color="blue" />
                <CourseItem name="Khóa học 5" color="blue" />
                <CourseItem name="Khóa học 6" color="blue" />
            </ScrollView>

            <Text style={styles.courseGroupTitle}>Khóa học khác</Text>

            <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                <CourseItem name="Khóa học 4" color="yellow" />
                <CourseItem name="Khóa học 5" color="yellow" />
                <CourseItem name="Khóa học 6" color="yellow" />
            </ScrollView>
        </>
    );
};

export default ListAllCourse;


function CourseItem(props){
    return (
        <View style={styles.courseItem}>
            <View style={{...styles.courseImage, backgroundColor: props.color}} />
            <Text style={styles.courseName}>{props.name}</Text>
            <Text style={styles.courseDesc}>{props.desc}</Text>

            <Button 
                title="Học khóa này" 
                onPress={() => {
                props.navigation.navigate('CourseInfoDetail');
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    courseItem: {
        width: 250, 
        height: 300, 
        marginRight: 10,
    },
    courseImage: {
        width: '100%', 
        height: 150, 
        // backgroundColor: props.color
    },
    courseGroupTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingLeft: GUTTER,
        marginVertical: 5,
    },
    courseName: {
        fontSize: 16,
        fontWeight: 'bold',
        
    }
  });