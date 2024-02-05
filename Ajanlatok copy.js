import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button, Image, TextInput,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ipcim from "./Ipcim"
import { TouchableOpacity } from 'react-native-gesture-handler';


const Ajanlatok = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'etelekajanlat');
      const json = await response.json();
      setData(json);
      alert(JSON.stringify(json))
    } 
    catch (error) {
      console.error(error);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24, backgroundColor: "#adff2f",}}>

    <Text style={{
        textAlign: "center",
        marginBottom: 20, 
        textTransform: "uppercase", 
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
        color: "darkgreen",
        }}>napi ajánlatunk</Text>

    <View style={{borderWidth: 1, borderColor: "green", marginBottom:20}}/>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({etelek_id}) => etelek_id}
          renderItem={({item}) => (
            <View style={{
              borderWidth:3, 
              marginBottom:10,
              backgroundColor:"lightgreen",}}>
                <Text style={{
                  color:"brown", 
                  fontSize:20, textAlign:"center", 
                  marginTop:20, 
                  marginBottom:5, 
                  color:"darkgreen", 
                  fontWeight:"bold", 
                  fontStyle:"italic",
                  textDecorationLine:"underline"}}>
                    {item.etelek_nev}
                </Text>

                <Image source={{uri: Ipcim.Ipcim + `${item.etelek_kep}`}} style={{
                  width:270, 
                  height:270, 
                  alignItems:"center", 
                  marginLeft:30, 
                  marginBottom:20, 
                  marginTop:20,}}
                />

                <TouchableOpacity onPress={() => navigation.navigate("Részletek", {atkuld1:item.etelek_id, atkuld2:item.etelek_nev, atkuld3:item.etelek_hozzavalok, atkuld4:item.etelek_allergenek, atkuld5:item.etelek_elkeszites, atkuld6:item.etelek_video, atkuld7:item.etelek_kep})}>
                  <View style={{padding: 10, borderRadius: 5, backgroundColor:"green", marginLeft:20, marginRight:20, marginBottom:10}}>
                    <Text style={{color: 'yellow', textAlign: 'center', textTransform:"uppercase", fontWeight:"bold", fontStyle:"italic"}}>Részletek</Text>
                  </View>
                </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Ajanlatok;