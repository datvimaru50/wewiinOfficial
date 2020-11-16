import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';


export default function CourseLearning() {
  return (
    <View style={{flex: 1}}>
        <Text style={{padding: 15}}>
            VÀO KHỌC KHÓA: TIẾNG ANH CƠ BẢN
        </Text>
        <Text style={{padding: 15}}>
            Bài 1: Xin Chào!
        </Text>
        <Text style={{padding: 15}}>
            Bài 2: Bạn sống ở đâu!
        </Text>

        <View style={{width: "100%", height: 300, justifyContent: "center", alignItems: "center", backgroundColor: "grey"}}>
            <Text>
                Video bài học
            </Text>
        </View>

        <Text style={{padding: 15}}>
            Bài 3: Nghề nghiệp của bạn là gì?
        </Text>
        <Text style={{padding: 15}}>
            Bài 4: Quốc tịch!
        </Text>
        <Text style={{padding: 15}}>
            Bài 5: Cảm ơn!
        </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  });