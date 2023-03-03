import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from '../pages/home';
import Opcao from '../pages/home/opcao';
import RM from '../pages/personas/rm';
import SPK1 from '../pages/personas/spk1';
import SPK2 from '../pages/personas/spk2';
import SPK3 from '../pages/personas/spk3';

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
      
      <Stack.Screen name='RM' component={RM} options={{ headerShown:false }}/>
      <Stack.Screen name='SPK1' component={SPK1} options={{ headerShown:false }}/>
      <Stack.Screen name='SPK2' component={SPK2} options={{ headerShown:false }}/>
      <Stack.Screen name='SPK3' component={SPK3} options={{ headerShown:false }}/>
  
    </Stack.Navigator>

   </NavigationContainer>
  );
}