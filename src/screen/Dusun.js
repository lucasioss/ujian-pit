import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dusun = ({ navigation }) => {
    const { items, deleteItem } = useState([]);
    const [data, setData] = useState([]);
    const getDataDusun = () => {
        AsyncStorage.getItem("token",)
        .then(value => {
            console.log('token', value)
            // setLoading(true)
            return fetch('https://dev-disambi.sandboxindonesia.id/api/dusun/',{
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  "Authorization": 'Bearer'+ value
                },
                
              })
            .then(response => response.json())
            .then(json => {
                console.log("data dusun", json)
                if(json?.data){
                    setData(json?.data)
                    console.log('data =', data)
                }
            })
            .catch(error => {
                console.error(error);
            });
        })
        .catch(err => console.error(err))
    }
    useEffect (() => {
        getDataDusun()
    })
    const renderItem = ({item}) => {
        return(
            <View style={styles.vii}>
                <Text style={styles.tec}>{item?.name }</Text>
                
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.satu}>
             <View style={styles.vio}>
                <Text style={styles.tx1}>AF</Text>
             </View>
              <Text style={styles.txt2}>Dusun</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem} 
                keyExtractor={item => item.id.toString()}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Tambah')} style={styles.tcb}>
                <Text style={styles.tp}>+</Text>
            </TouchableOpacity>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        elevation:1/2,
        width:'100%',
        height:50,
        marginTop:15,
        borderRadius:7,
        backgroundColor:'white'
    },
    deleteButton: {
        color: 'blue',
    },
    text: {
        color: 'black',
    },
    satu:{
      width:'100%',
      height:70,
      borderBottomWidth:1/2,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      flexDirection:'row',
    //   backgroundColor:'#FFCFB3'
    },
    txt2:{
      color:'black',
      fontSize:30,
      fontWeight:'bold',
      marginLeft:80,
      marginTop:7
    },
    tcb:{
      height:70,
      width:70,
      backgroundColor:'#87A2FF',
      justifyContent:'center',
      alignItems:'center',
      right:10,
      position:'absolute',
      bottom:10,
      borderRadius:70,
      elevation:2,
      borderWidth:1,
      borderColor:'white'
    },
    tp:{
      fontSize:40,
      color:'white'
    },
    vio:{
      height:50,
      width:50,
      borderRadius:50,
      backgroundColor:'#C4D7FF',
      justifyContent:'center',
      alignItems:'center',
      marginTop:7
      
    },
    vii:{
        height:70,
        width:'100%',
        borderWidth:1/2,
        borderColor:'black',
        borderRadius:9,
        marginTop:10,
        backgroundColor:'#87A2FF'
    },
    tec:{
        fontWeight:'bold',
        color:'black',
        marginTop:18,
        left:7
    },
    tx1:{
        color:'white',
        fontSize:25,
    },

});

export default Dusun;