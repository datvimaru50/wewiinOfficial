
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, onChangeUser] = React.useState('');
  const [password, onChangePass] = React.useState('');

  const userTxt = useState("Tên đăng nhập");
  const pwdTxt = useState("Mật khẩu");

  const GUTTER = 15;
  return (
        
      <View style={{flex: 1}}>

        {/* 
          ***************************************
                  APP LOGO
          ***************************************                  
        */}
        <View style={styles.appLogo}>
          <Image 
            source={require("../assets/logo.png")} 
            resizeMode="center" 
          />
        </View>

        {/* 
          ***************************************
                  APP SIGNIN
          ***************************************                  
        */}
        <View 
          style={{flex: 1, padding: GUTTER}}
        >
          <Text numberOfLines={1} style={styles.marginBottom}>{userTxt}</Text>
          <TextInput
            style={{...styles.signInput, ...styles.marginBottom}}
            onChangeText={text => onChangeUser(text)}
            value={username}
            textContentType="username"
            autoCompleteType="username"
            placeholder="Nhập tên đăng nhập hoặc email"
          />
          
          <Text numberOfLines={1} style={styles.marginBottom}>{pwdTxt}</Text>
          <TextInput
            style={{...styles.signInput, ...styles.marginBottom}}
            onChangeText={text => onChangePass(text)}
            value={password}
            textContentType="password"
            autoCompleteType="password"
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
          />
          <Text style={{color: "#0075b4", fontSize: 12}}>{"Quên mật khẩu, hãy liên hệ với giảng viên!"}</Text>
          
        </View>
        
        {/* 
          ***************************************
                  APP SIGNIN BUTTON
          ***************************************                  
        */}
        <View style={{flex: 1, padding: GUTTER, justifyContent: "space-between"}}>
          <Button
            color="#ff7f45"
            onPress={() => {
              navigation.navigate('Dashboard');
              // alert('Đăng nhập thành công!');
            }}
            title="Đăng nhập"
          />

          <Text style={{textAlign: "center"}}>{"© Bản quyền thuộc về GET JSC 2020"}</Text>

        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 23,
    color: 'red'
  },
  appLogo: {
    flex: 1,
    height: 200,
    backgroundColor: '#1caba0', 
    alignItems: "center", 
    justifyContent: "center"
  },
  signInput: { 
    borderColor: '#bfbfbf', 
    borderWidth: 1,

    borderRadius: 3,
    // marginBottom: 10 
  },
  marginBottom: {marginBottom: 10}
});