import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../features/counterSlice';


import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Video from "react-native-video"

const GUTTER = 15;

export default function CourseInfoDetail({navigation}) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  let player;

  return (
    <View style={{flex: 1}}>

        <View style={{aspectRatio: 16/9, position: "relative"}}>

          <Video 
            source={{uri: "https://baoxaydung.com.vn/stores/video_data/hiep/102020/26/08/15816.mp4"}}   // Can be a URL or a local file.
            ref={ref => {
              player = ref
            }}   
            controls={true}     
            resizeMode="cover" 
            style={styles.backgroundVideo}
        />
        </View>


        <View style={{padding: 15}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Tiếng Anh cơ bản cho người mất gốc</Text>
            <Text style={{marginVertical: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button 
                    title="Vào khóa học"
                    onPress={() => {
                        navigation.navigate('CourseLearning');
                    }}
                />
                <Button title="Download" color="grey" />
            </View>

            <View style={{height: 100, width: "100%"}}>
              <Text>Counter: {count}</Text>
              <Button title="Download" color="grey" onPress={()=>{dispatch(increment())}} />
            </View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  });