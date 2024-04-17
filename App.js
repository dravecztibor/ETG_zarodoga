import * as React from 'react';

import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Proba from "./Proba"
import Proba2 from "./Etelek"
import Proba3 from "./Eteltipusok"
import Kep from "./Kep"
import Felvitel from "./Felvitel"
import Lenyilo from "./Lenyilo"
import Kozosscreen from "./Etelek2"
import Ujlap from "./Reszletek"
import Video from "./Video"
import Keresszoveg from "./Keresesszoveg"
import Ajanlatok from "./Ajanlatok"

//Gábor
import Uzletek_gabor from "./Uzletek_gabor";
import Kozosscreen_gabor from './Kozosscreen_gabor';
import Ujlap_gabor from './Ujlap_gabor';
import Keresesszoveg_gabor from './Keresesszoveg_gabor';
import Lenyilo_gabor from "./Lenyilo_gabor"

//Erik


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      {/*<Button
        onPress={() => navigation.navigate('Proba')}
        title="Próba képernyő"
      />*/}
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Etelek({ navigation }) {
  return (
    <Proba2/>
  );
}

function Eteltipusok({ navigation }) {
  return (
    <Proba3/>
  );
}

function Root ({navigation}){
  return(
    <Drawer.Navigator initialRouteName="Home">
      {/*<Drawer.Screen name="Home" component={HomeScreen} />*/}
      {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
      <Drawer.Screen name="Ételek" component={Kozosscreen} />
      <Drawer.Screen name="Ajánlatok" component={Ajanlatok} />
      <Drawer.Screen name="Felvitel" component={Felvitel} />

      {/*Gábor*/}
      <Drawer.Screen name="Üzletek" component={Uzletek_gabor} />   
      <Drawer.Screen name="Kategóriák" component={Lenyilo_gabor} /> 
      
      <Drawer.Screen name="Keresés" component={Keresesszoveg_gabor} />
      {/*<Drawer.Screen name="Keresés" component={Keresszoveg} />*/}
      {/*<Drawer.Screen name="Ételek" component={Etelek} />*/}
      {/*<Drawer.Screen name="Ételtípusok" component={Eteltipusok} />*/}
      {/*<Drawer.Screen name="Képfeltöltés" component={Kep} />*/}
      {/*<Drawer.Screen name="Lenyíló" component={Lenyilo} />*/}
      {/*<Drawer.Screen name="Videók" component={Video} />*/}
      
    </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{headerShown:false}} />
        <Stack.Screen name="Proba" component={Proba} />
        <Stack.Screen name="Részletek" component={Ujlap} />

        {/*Gábor*/}
        <Stack.Screen name="Ujlap_gabor" component={Ujlap_gabor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}