import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>iki</Text>
      <Iki />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Iki = () => {
  return <Text>iki ganteng</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1568750655107-5f50598fc8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpha2FydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      }}
      style={{width: 100, height: 200}}
    />
  );
};

export default App;
