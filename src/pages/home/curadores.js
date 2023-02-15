import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Curadores() {
 return (
   <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
            <Image source={require('../../images/crd1.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/crd2.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/crd3.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/crd4.png')} style={styles.imageSpk}/>
        </TouchableOpacity>    
        <TouchableOpacity>
            <Image source={require('../../images/crd1.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images//crd2.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/crd3.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/crd4.png')} style={styles.imageSpk}/>
        </TouchableOpacity>    
        </ScrollView>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
       
        paddingHorizontal:5,
        justifyContent:'flex-start',
        width:400,
        height:100
    },
    imageSpk:{
        width:84,
        height:84,
        margin:7
    }
    })