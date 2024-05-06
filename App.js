import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Alert} from 'react-native';
import Product from './components/Products';
import AddProduct from './components/AddProducts';

export default function App() {

  const [tabArticles,setTabArticles] = useState([])
  const [count,setCount] = useState(0)

  useEffect(() => {
    console.log('passed count = '+count)
    if(count > 3){
      setTabArticles([])
    }
   
  },[count]);

  const submitHandler = (articleName) => {
    const idString = Date.now().toString();
    if(articleName.length > 1){
      setTabArticles(currentArticles => [{key: idString, name : articleName},...currentArticles])
    // setArticleName('') //reset le champs de l'article actuel 
      console.log(tabArticles)
    }else{
      //alert('refusé')
            Alert.alert('Désole','le nombre de char doit etre supérieur à 1',[
        {
          text : 'Compris',
         // onPress: () =>
        },
        {
          text : 'OK',
          onPress: () =>  setCount(count +1)
        },
        {
          text : 'Yes',
          onPress: () => console.log('yes clicked')
        },
      
      ],
      {
        cancelable : true,
        onDismiss : () => console.log('dismiss')
      }
      )
    }
  }

  const deleteArticle = (key) => {
    setTabArticles(currentArticles =>{
        return currentArticles.filter(articleName => articleName.key != key)
    } )

  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler = {submitHandler}/>
        <FlatList
        data = {tabArticles}
        renderItem={({item}) => 
        <Product 
          name = {item.name} 
          key_props = {item.key}
         deleteArticle = {deleteArticle}
        />  }>

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
