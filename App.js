import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [tabArticles,setTabArticles] = useState([])
  const [articleName,setArticleName] = useState("")

  const inputHandler = (name ) =>{
    setArticleName(name)
  }

  const submitHandler = () =>{
    setTabArticles(currentArticles => [...currentArticles,articleName])
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
      <ScrollView>
      <View style={styles.item}>
        {
          tabArticles.map((articleName,index) => (
          <Text style ={styles.element} key={index} > {articleName} </Text>
          ))
        }

      </View>
      </ScrollView>

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
  item:{
    //backgroundColor : "red"
    marginTop : 10
  },
  element:{
    backgroundColor : "yellow",
    padding : 20,
    fontSize : 17, // police du text
    marginVertical : 6 //permet de definir des marges vertical plus facilement 
    //qu'avec margin top et botom
  }
});
