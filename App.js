import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Product from './components/Products';
import AddProduct from './components/AddProducts';

export default function App() {

  const [tabArticles,setTabArticles] = useState([])


  const submitHandler = (articleName, setArticleName) =>{
    const idString = Date.now().toString();
    setTabArticles(currentArticles => [{key: idString, name : articleName},...currentArticles])
   // setArticleName('') //reset le champs de l'article actuel 
    console.log(tabArticles)
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler = {submitHandler}/>
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
  
  
});
