// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ChevronRight from '../assets/svg/chevron-right.svg';
import Case from '../assets/svg/case.svg';
import Book from '../assets/svg/book.svg';
import Phone from '../assets/svg/call-phone.svg';
import Question from '../assets/svg/question-circle.svg';

import { RNCamera } from 'react-native-camera';

const GUTTER = 15;

export default function Profile(props) {
  // let camera;

  return (
    <ScrollView 
      style={{flex: 1,}}
      // alwaysBounceVertical={false}
      // fadingEdgeLength={1}
      scrollToOverflowEnabled={true}
    >

      <View style={{backgroundColor: "#fff", height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: "hidden"}}>

        {/* 
          ***************************************
                 TITLE BAR
          ***************************************                  
        */}
        <View style={{...styles.sectionContainer, flexDirection: "row"}}>
          <Text style={{fontSize: 22, fontWeight: "bold"}}>Tài khoản</Text>
          <TouchableOpacity style={{width: 70, alignItems: "flex-end", }} onPress={()=>props.onCloseModal()}>
            <Text style={{color: "red", fontSize: 18}}>ĐÓNG</Text>
          </TouchableOpacity>
        </View>

        {/* 
          ***************************************
                  PERSONAL INFORMATION
          ***************************************                  
        */}
        <TouchableOpacity style={{...styles.sectionContainer, flexDirection: "row"}}>
          <View style={{flexDirection: "row"}}>
            <View style={styles.avatarContainer}>
              <Image 
                source={require("../assets/doremon.jpg")} 
                style={styles.avatarImage}
              />
            </View>
            
            <View style={{justifyContent: "center"}}>
              <Text style={styles.fullName}>Vũ Quốc Đạt</Text>
              <Text style={styles.email}>datvimaru50@gmail.com</Text>
            </View>

          </View>

          <ChevronRight
            width={24} 
            height={24} 
            fill="#9a9a9a"
          />
        </TouchableOpacity>

        {/* 
          ***************************************
                  COURSE, CLASSROOM SECTION
          ***************************************                  
        */}
        <View style={styles.sectionContainer}>

          <View style={styles.sectionItem}>

            {/* item icon */}
            <Book
              width={30} 
              height={30} 
              fill="#3fb647"
            />

            <TouchableOpacity style={{...styles.sectionItemText, ...styles.sectionItemBorder}}>
              <Text style={{fontSize: 18, color: "#333"}}>Khóa học đang học</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionItem, marginTop: 15}}>
            {/* item icon */}
            <Case
              width={30} 
              height={30} 
              fill="#4997e6"
            />

            <TouchableOpacity style={styles.sectionItemText}>
              <Text style={{fontSize: 18, color: "#333"}}>Lớp học đang học</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>


        </View>

        {/* 
          ***************************************
                  APP INFO SECTION
          ***************************************                  
        */}
        <View style={styles.sectionContainer}>

          <View style={styles.sectionItem}>

            {/* item icon */}
            <Question
              width={30} 
              height={30} 
              fill="#be62e1"
            />

            <TouchableOpacity style={{...styles.sectionItemText, ...styles.sectionItemBorder}}>
              <Text style={{fontSize: 18, color: "#333", }}>Hướng dẫn sử dụng</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionItem, marginTop: 15}}>
            {/* item icon */}
            <Phone
              width={30} 
              height={30} 
              fill="#eb4066"
            />

            <TouchableOpacity style={styles.sectionItemText}>
              <Text style={{fontSize: 18, color: "#333"}}>Trợ giúp</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* 
          ***************************************
                  COURSE, CLASSROOM SECTION
          ***************************************                  
        */}
        <View style={styles.sectionContainer}>

          <View style={styles.sectionItem}>

            {/* item icon */}
            <Book
              width={30} 
              height={30} 
              fill="#3fb647"
            />

            <TouchableOpacity style={{...styles.sectionItemText, ...styles.sectionItemBorder}}>
              <Text style={{fontSize: 18, color: "#333"}}>Khóa học đang học</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionItem, marginTop: 15}}>
            {/* item icon */}
            <Case
              width={30} 
              height={30} 
              fill="#4997e6"
            />

            <TouchableOpacity style={styles.sectionItemText}>
              <Text style={{fontSize: 18, color: "#333"}}>Lớp học đang học</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>


        </View>

        {/* 
          ***************************************
                  APP INFO SECTION
          ***************************************                  
        */}
        <View style={styles.sectionContainer}>

          <View style={styles.sectionItem}>

            {/* item icon */}
            <Question
              width={30} 
              height={30} 
              fill="#be62e1"
            />

            <TouchableOpacity style={{...styles.sectionItemText, ...styles.sectionItemBorder}}>
              <Text style={{fontSize: 18, color: "#333", }}>Hướng dẫn sử dụng</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionItem, marginTop: 15}}>
            {/* item icon */}
            <Phone
              width={30} 
              height={30} 
              fill="#eb4066"
            />

            <TouchableOpacity style={styles.sectionItemText}>
              <Text style={{fontSize: 18, color: "#333"}}>Trợ giúp</Text>
              <ChevronRight
                width={24} 
                height={24} 
                fill="#9a9a9a"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{padding: GUTTER, marginTop: 20}}>
          <Button title="ĐĂNG XUẤT" color="red" />
        </View>


        {/* <View style={{flexDirection: "row", marginBottom: 10, justifyContent: "space-between"}}>
            <Button 
                title="Upload"
                onPress={() => {
                    navigation.navigate('CourseLearning');
                }}
            />
        </View> */}
      
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
    position: "relative",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    marginRight: 5,
    // marginLeft: -15,
  },
  avatarImage:{
    position: "absolute",
    width: 100,
    height: 100,
    top: 0,
    left: 0
  },
  fullName:{
    fontSize: 18,
    fontWeight: "bold"
  },
  email:{
    color: "#a1a1a1"
  },
  sectionContainer: {
    width: "100%",
    borderBottomWidth: 3, 
    borderBottomColor: "#f1f1f1", 
    padding: GUTTER, 
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionItem: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "blue"
  },
  sectionItemText: {
    marginLeft: 5,
    flexDirection: "row", 
    justifyContent: "space-between", 
    flex: 1,
  },
  sectionItemBorder:{
    borderColor: 
    "#c7c7c7", 
    borderBottomWidth: 1, 
    paddingBottom: 15
  }
});