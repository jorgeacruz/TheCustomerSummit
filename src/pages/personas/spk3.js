import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import HeaderHome from '../home/header';
import Speakes from './speakes';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SPK3() {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.info}>
        <Image source={require('../../images/personas/spk3.png')} style={styles.picture} />
        <Text style={styles.title}>Bryan Hochstein</Text>
        <Text style={styles.subTitle}>
          Autor best-seller e líder no ensino e prática de CX e CS
        </Text>
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque ex, ornare vel nisl in, pulvinar luctus odio. Integer posuere ac dui id fringilla. In hac habitasse platea dictumst. Integer non rhoncus odio, suscipit lobortis metus. Mauris neque nisl, elementum at convallis vel, venenatis sit amet magna. Nulla facilisi.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque ex, ornare vel nisl in, pulvinar luctus odio. Integer posuere ac dui id fringilla. 
In hac habitasse platea dictumst. Integer non rhoncus odio, suscipit lobortis metus. Mauris neque nisl, elementum at convallis vel, venenatis sit amet magna. Nulla facilisi.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque ex, ornare vel nisl in, pulvinar luctus odio. Integer posuere ac dui id fringilla. 
        </Text>
      </View>

      <Speakes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 5,
    fontSize: RFValue(15),
    marginVertical: 8,
    fontWeight: 'bold',
    color: '#851849',
  },
  subTitle: {
    color: '#000',
    fontWeight:'bold'
  },
  description:{
    lineHeight:22,
    width:380,
    marginVertical:30
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  picture: {
    marginVertical: 10
  }
})