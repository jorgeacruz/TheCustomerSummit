import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Text } from 'react-native';


export default function Speakes() {

    const navigation =useNavigation();

    function ctaRM(){ navigation.navigate('RM'); }
    function cta1(){ navigation.navigate('SPK1'); }
    function cta2(){ navigation.navigate('SPK2'); }
    function cta3(){ navigation.navigate('SPK3'); }

 return (
   <View style={styles.container}>


<Text style={styles.title2}>
        Speakers do evento
      </Text>
    
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={ctaRM}>
            <Image source={require('../../images/spk1.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={cta1}>
            <Image source={require('../../images/spk2.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={cta2}>
            <Image source={require('../../images/spk3.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={cta3}>
            <Image source={require('../../images/spk4.png')} style={styles.imageSpk}/>
        </TouchableOpacity>    
        <TouchableOpacity>
            <Image source={require('../../images/spk1.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/spk2.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/spk3.png')} style={styles.imageSpk}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/spk4.png')} style={styles.imageSpk}/>
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
        height:150
    },
    imageSpk:{
        width:84,
        height:84,
        margin:7
    },
    title2:{
        width:'100%',
        paddingVertical:5,
        fontSize:RFValue(15),
        marginVertical:8,
        fontWeight:'bold',
        color:'#851849',
      }
   
    })