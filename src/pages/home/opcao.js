import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import HomeScreen from '.';
import Speakes from '../personas/speakes';
import Curadores from '../personas/curadores'
import Swiper from 'react-native-swiper';
import HeaderHome from '../home/header';

export default function Opcao() {

// navigation
const Navigation = useNavigation();

//Activity Indicator
const [videoReady, setVideoReady] = useState(false);

 return (
   <View style={styles.container}>
    
    <HeaderHome/>
      
     <ScrollView style={{width:'100%'}}>
     
     <View style={{alignItems:'center'}}>
     

       <YoutubePlayer
      height={240}
      width={'100%'}
      play={false}
      videoId={"7h4XtOZHncU"}
      onReady={() => setVideoReady(true)}
      
      />

      { !videoReady && <ActivityIndicator color={'#851849'}/>}
     


      <Speakes/>
  
      <Text style={styles.title2}>Números do evento</Text>
      <View style={styles.numEvento}>
        <View style={styles.numBlock}>
          <Text style={styles.numTitle}>serão</Text>
          <Text style={styles.numText}>03</Text>
          <Text style={styles.numTitle}>Dias de Evento</Text>
        </View>
        <View style={styles.numBlock}>
          <Text style={styles.numTitle}>mais de</Text>
          <Text style={styles.numText}>20</Text>
          <Text style={styles.numTitle}>Palestrantes</Text>
        </View>
        <View style={styles.numBlock}>
          <Text style={styles.numTitle}>mais de</Text>
          <Text style={styles.numText}>15</Text>
          <Text style={styles.numTitle}>Cases</Text>
        </View>
        <View style={styles.numBlock}>
          <Text style={styles.numTitle}>acesso a</Text>
          <Text style={styles.numText}>08</Text>
          <Text style={styles.numTitle}>conteudo exclusivo</Text>
        </View>
        

      </View>
      <Text style={styles.title2}>
        Curadores do evento
      </Text>

      <Curadores/>

      <Text style={styles.title2}>
        The Customer News
      </Text>
      <View style={styles.slideNews}>
        <Swiper autoplay={true} autoplayTimeout={4} showsPagination={false}>
          <View style={{marginHorizontal:5}}>
            <Image source={require('../../images/News2.png')}/>
            <Text style={styles.sldTitle}> Loren Ipsum news customer... </Text>
            <Text style={styles.sldDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </View>
          <View style={{marginHorizontal:5}}>
            <Image source={require('../../images/News3.png')}/>
            <Text style={styles.sldTitle}> Loren Ipsum news customer... </Text>
            <Text style={styles.sldDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </View>
          <View style={{marginHorizontal:5}}>
            <Image source={require('../../images/News3.png')}/>
            <Text style={styles.sldTitle}> Loren Ipsum news customer... </Text>
            <Text style={styles.sldDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </View>
          <View style={{marginHorizontal:5}}>
            <Image source={require('../../images/News3.png')}/>
            <Text style={styles.sldTitle}> Loren Ipsum news customer... </Text>
            <Text style={styles.sldDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </View>
          <View style={{marginHorizontal:10}}>
            <Image source={require('../../images/News2.png')}/>
            <Text style={styles.sldTitle}> Loren Ipsum news customer... </Text>
            <Text style={styles.sldDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </View>
        </Swiper>
      </View>

      
      <TouchableOpacity style={styles.ctaAgenda}>
        <Text style={styles.ctaText}>Conheça a Agenda do evento</Text>
      </TouchableOpacity>

      <Text style={[styles.title2,{paddingTop:30}]}>Realização</Text>
      <View style={{flexDirection:'row', width:'90%', justifyContent:'space-around', alignItems:'center', marginBottom:50}}>
        <Image source={require('../../images/conquist_marca2.png')} style={{width:'40%'}}/>
        <Image source={require('../../images/conquist_marca1.png')} style={{width:150, height:80}}/>
      </View>


      
    </View>
    </ScrollView>
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#fff',
    },
  ViewScroll:{
      alignItems:'center'

   },
 
  title:{
    fontSize:RFValue(12),
    marginVertical:8,
    fontWeight:'bold',
    color:'#fff'
  },
  title2:{
    width:'100%',
    paddingHorizontal:18,
    paddingVertical:5,
    fontSize:RFValue(15),
    marginVertical:8,
    fontWeight:'bold',
    color:'#851849',
  },

  
  // block numeros
  numEvento:{
    flexDirection:'row',
    width:'95%',
    padding:10,
    borderRadius:5,
    backgroundColor:'#851849',
    justifyContent:'center'
  },
  numBlock:{
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  numTitle:{
    fontSize:RFValue(10), 
    fontWeight:'500',
    color:'#fff'
  },
  numText:{
    fontSize:RFValue(24), 
    fontWeight:'700',
    color:'#FFC32E'
  },
  // CTA agenda
  ctaAgenda:{
    backgroundColor:'#000D31',
    padding:15,
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5

  },
  ctaText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:RFValue(15)
  },
  // News block
  slideNews:{
    width:'90%',
    height:300
  },
  sldTitle:{
    fontSize:RFValue(14),
    fontWeight:'800',
    color:'#000',
    marginVertical:5,

  },
  sldDescription:{
    fontSize:RFValue(10),
    color:'#000',
    marginVertical:5,
  }
})