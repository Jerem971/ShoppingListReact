import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Product from './components/Products';

export default function App() {

  const [tabArticles,setTabArticles] = useState([])
  const [articleName,setArticleName] = useState("")

  const inputHandler = (name ) =>{
    setArticleName(name)
  }

  const submitHandler = () =>{
    const idString = Date.now().toString();

    
    setTabArticles(currentArticles => [{key: idString, name : articleName},...currentArticles])
    setArticleName('') //reset le champs de l'article actuel 
    console.log(tabArticles)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style = {styles.textInput}
        placeholder='Saisir votre acticle'
        onChangeText={inputHandler}
        value = {articleName}
        >
        </TextInput>
        
        <Button title="Enregistrer l'article" onPress={submitHandler}>
        </Button>
      </View>
        <FlatList
        data = {tabArticles}
        renderItem={({item}) => <Product name = {item.name}/> }>

        </FlatList>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  padding:40,
  paddingTop:60
  },
  inputContainer:{

  },
  textInput:{
    borderColor:'grey',
    padding :5,
    paddingLeft :10,
    flexGrow:1
  },
  
});
