import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tambah = ({navigatio}) => {

  return (
    <View style={{flex:1}}>
    <View style={styles.v1}>
      <Text style={styles.text}>Tambah Dusun</Text>
    </View>
    <View style={styles.vi}>
        <TextInput 
        placeholder='Masukan Nama Dusun Anda !!'
        placeholderTextColor={'black'}
        style={{color:'black'}}
        onChangeText={(text) => setInputan(text)}
        />
      </View>
    <TouchableOpacity style={styles.tombol} onPress={()=>handlingAdd()}>
        <Text style={{color:'white'}}>Tambah</Text>
      </TouchableOpacity>
    
    </View>

  )
}

export default Tambah

const styles = StyleSheet.create({
    v1:{
        height:60,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        top:20
    },
    text:{
        fontSize:22,
        color:'black',
        borderBottomColor:'black',
    },
    vv:{
        height:70,
        width:300,
        backgroundColor:'cyan',
        left:60,
        top:20
    },
    tombol:{
        width:150,
        height:50,
        backgroundColor:'#C4D7FF',
        borderRadius:8,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        left:130
    },
    vi:{
    width:300,
    height:60,
    borderRadius:8,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    marginTop:50,
    left:60
    }
})