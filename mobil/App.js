// Szőllősi-Maruzs Eszter
// SzoftII/1E
// 2024.04.02

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './services/tanulokServices';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';


export default function App() {
  const [tanulok, setTanulok] = useState([]);
  useEffect(() => {
    lekerTanulok()
    .then(data => {
      console.log(data) 
      setTanulok(data);
    })
  }, []);

  
  return (
    <View style={styles.container}>
      <Text><h2>Tanulók</h2></Text>
      <FlatList
        data={tanulok}
        renderItem={({ item }) => (
          <View style={styles.tanulokLista}>
            <Text>Név: {item.name}</Text>
            <View style={styles.footer}>
            <Text style={styles.cityText}>Város: {item.city} </Text>
            </View>
            <View>
            <Text style={styles.birthText}>Születési idő: {item.birth}</Text>
            </View>
          </View>
        )}
/>
    <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tanulokLista: {
    border: '2px solid #555',
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: '#aaa',
    shadowColor: '#333333', 
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9, 
    shadowRadius: 4, 
    color: '#fff',
  },
    footer: {
      display: 'flex',
      flexDirection: 'row'
    }
});
