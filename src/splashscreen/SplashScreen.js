import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect (()=>{
        setTimeout(() => {
            navigation.replace('Login')
        },3000);
        // console.error('eror')
        
    })
  return (
    <View style={styles.container}>
        <Image source={require('../assets/Sisambi.png')} style={styles.logo}/>
        <Text style={styles.Text}>DISAMBI</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height:150,
    }, 
    Text:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        marginTop:10
    }
})