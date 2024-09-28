import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {View,Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity} from 'react-native'


const Login = ({ navigation }) => {
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
    const [klik,setKlik] = useState (false)
    const [hide,setHide] = useState (true)

    const handlerKlik = () => {
        setKlik(!klik)
        // if (json?body){
        //     AsyncStorage.setItem('stringify',json?.data?.stringify);
        //     console.log(json)
        // }
    }
    const handlerHide = () => {
        setHide(!hide)
    }

const handleLogin = () => {
    return fetch('https://dev-disambi.sandboxindonesia.id/api/auth/login/',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username:username,
            password:password
          }),
        
      })
    .then(response => response.json())
    .then(json => {
        if(json?.data){
            AsyncStorage.setItem('token', json?.data?.access_token);    
            console.log(json);
            setTimeout(() => {
                Alert.alert(
                    'Peringatan',
                    'Apakah Yakin Anda ingin berpindah ke halaman lain?',
                    [
                      {
                        text: 'Yakin',
                        onPress: () => navigation.navigate("Dusun"),
                      },
                      {
                        text: 'Nggak Yakin',
                        onPress: () => Goback(),
                      },
                    ],
                  );
                }, 3000);
              
        }
        else{
            setTimeout(() => {
            Alert.alert(json?.message)
            setModal(false)},3000)
            
        }
    })
    .catch(error => {
    console.error(error);
    });
	}

	
	return (
		<View style={styles.container}>
			<Image source={require('../assets/Sisambi.png')} style={styles.img}/>
            <Text style={styles.tex}>DISAMBI</Text>
                <View style={styles.two}>
                    <Text style={styles.tls}>Username</Text>
                    <View style={styles.cc}>
			        <TextInput placeholder='Masukan username' placeholderTextColor={"gray"} value={username} onChangeText={text => setUsername(text)} style={styles.usr}/>
                    </View>
                    <Text style={styles.tls}>Password</Text>
                    <View style={styles.cc}>
			        <TextInput placeholder='Masukan password' placeholderTextColor={"gray"} value={password} onChangeText={text => setPassword(text)} secureTextEntry={hide} style={styles.usr}/>
                    <TouchableOpacity onPress={handlerHide} style={{right:10, position:'absolute',}}> 
                    {hide ? (
                         <Image source={require('../assets/close-eye.png')} style={styles.mata}/>
                             ):
                             (<Image source={require('../assets/visible.png')}style={styles.mata}/>)}
                    
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text>ingatkan saya</Text>
                    </View>
                </View>
                <View style={styles.teksbawah}>
                <TouchableOpacity style={styles.kotak} onPress={handlerKlik}>
                {klik ? (
                    <Image source={require('../assets/checklist.png')} style={styles.centang}/>
                     ):
                        (<View style={styles.teksbawah}></View>)}
                </TouchableOpacity>
                <Text style={styles.tp}>Ingatkan saya</Text>
                </View>
			    <TouchableOpacity activeOpacity={0.1} onPress={handleLogin} style={styles.tcb}>
                    <Text style={styles.tls2}>Masuk</Text>
                </TouchableOpacity>
		</View>
	)
}


 
export default Login;

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    tex:{
        fontSize:21,
        color:'black',
        width:100,
        fontWeight:'bold'
    },
    img:{
        width:100,
        height:100,
    },
    two:{
        alignItems:'flex-start',
        justifyContent:"flex-start",
        width:'100%',
        marginLeft:25,
    },
    usr:{
        color:'black',
        height:45,
        color:'black',
        marginLeft:10,
        
    },
    tls:{
        fontSize:18,
        color:'black',
        marginTop:15,
    },
    tcb:{
        width:350,
        justifyContent:'center',
        padding:12,
        backgroundColor:'#87A2FF',
        borderRadius:5,
        alignItems:'center',
        marginTop:60,
    },
    tp:{
        fontSize:12,
        color:'black',
        marginLeft:15,
    },
    tls2:{
        color:'black',
        alignItems:'center',

    },
    cc:{
        borderWidth:1,
        height:50,
        marginTop:15,
        borderRadius:5,
        flexDirection:'row',
        width:385,
    },
    teksbawah:{
        flexDirection:'row',
        marginRight:250
    },
    centang:{
        height:25,
        width:25,
    },
    kotak:{
        height:22,
        width:21,
        marginLeft:10,
        backgroundColor:'white',
        elevation:2,
    },
    mata:{
        height:25,
        width:25,
        marginLeft:170,
        marginTop:10,
    }
})

