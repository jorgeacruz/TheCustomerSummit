import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Opcao from './opcao';

export default function HeaderHome() {
    const navigation = useNavigation();
 return (
    <View style={styles.headerTop}>
    <TouchableOpacity onPress={() => navigation.navigate(Opcao)}>
      <Image source={require('../../images/arrow-left.png')} style={{width:30, height:30}}/>
    </TouchableOpacity>
    <Text style={styles.title}>The Customer Summit</Text>
      <View style={styles.areaFlags}>
          <TouchableOpacity onPress={() => changeLanguage('br')}>
              <Image source={require('../../images/Brazil-flag.png')} style={styles.ctaFlag}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('en')}>
              <Image source={require('../../images/USA-flag.png')} style={styles.ctaFlag}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('sp')}>
              <Image source={require('../../images/Spain-flag.png')} style={styles.ctaFlag}/>
          </TouchableOpacity>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
    headerTop:{
        paddingTop:50,
        paddingHorizontal:10,
        justifyContent:"space-around",
        alignItems:'center',
        backgroundColor:'#000D31',
        flexDirection:'row',
        height:120,
        width:'100%'
    },
    // flags
  areaFlags:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'stretch',
  },
  ctaFlag:{
    margin:2,
  },
  description:{
    width:300,
    textAlign:'center',
    fontWeight:'bold',
    color:'#851849'
  },
  title:{
    fontSize:RFValue(12),
    marginVertical:8,
    fontWeight:'bold',
    color:'#fff'
  }
})