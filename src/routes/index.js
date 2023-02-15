import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from '../pages/home';
import Opcao from '../pages/home/opcao';

const Stack = createNativeStackNavigator();

export default function Routes() {
    
 return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} 
      options={{
        headerShown:false
      }}/>
      <Stack.Screen name='Opcao' component={Opcao} 
      options={{
        headerShown:false,
        title:"The Customer Summit",
        headerBackTitle:"Voltar",
        headerBackVisible:true,
        headerTintColor:"#fff",
        headerStyle:{
          backgroundColor:"#000D31",
        }
      }}/>
    </Stack.Navigator>

   </NavigationContainer>
  );
}