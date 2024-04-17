import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Button, TextInput} from 'react-native';
import Ipcim from './Ipcim';
import { BorderlessButton } from 'react-native-gesture-handler';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [text, setText] = useState('');

  

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const keresfuggveny = async () => {
    //alert(text)
    var adatok ={
        "bevitel1":text
    }
    try {
        const response = await fetch(Ipcim.Ipcim+'keresszoveg',
        {
            method: "POST",
            body: JSON.stringify(adatok),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  }
  

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
        <TextInput
        style={{height: 40}}
        placeholder="Írja be a várost ahol keresni szeretne."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Button id="Keresesgomb" title='Keresés' style={{}} onPress={()=> keresfuggveny()} />
      {isLoading ? (
        null
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
              <Text style={{fontWeight:'bold', fontSize:17, padding:7}}>
                {item.uzlet_nev}
              </Text>
              <Text style={{fontStyle:'italic'}}>
                {item.varos_nev} {item.uzlet_cim}
              </Text>
              </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({


})
export default App;