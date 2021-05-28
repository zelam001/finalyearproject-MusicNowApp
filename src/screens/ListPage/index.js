import React, {  useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native';
import styles from './styles';
import List from './list';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

export default function index() {

  const [music,setMusic] = useState();
  const [musicItems, setMusicItems] = useState([]);

  const handleAddMusic = () => {
    setMusicItems([...musicItems, music])
    setMusic(null); //so when plus is clicked the entry is cleared after it was added, should add stories component
  }

  const deleteMusic = (index) => {
    
    let musicCopy = [...musicItems];
    musicCopy.splice(index, 1);
    setMusicItems(musicCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.listsWrapper}>
        <Text style={styles.title}>Add Music List</Text>
        <View style={styles.itemsindex}> 
          {
            musicItems.map((item, index) => { 
              return (
                <TouchableOpacity key={index} onPress={() => deleteMusic(index )}>
                    <List text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/* <List text={'Adele - 21'} />
          <List text={'Post Malone - Stoney'} /> */}
        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeListWrapper}
      
      > 
        <TextInput style={styles.input} placeholder={'Write up some Music!'} value={music}  onChangeText={text => setMusic(text)}/>

        <TouchableOpacity onPress={() => handleAddMusic()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </View>
  );
}
