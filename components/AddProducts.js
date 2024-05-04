import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const AddProduct = ({submitHandler}) =>{

    const [articleName,setArticleName] = useState("")

    const inputHandler = (name ) =>{
        setArticleName(name)
    }

    
  const handleClik = () =>{
    submitHandler(articleName)
    setArticleName("");
  }

    return(
        <View style={styles.inputContainer}>
             <TextInput style = {styles.textInput}
                placeholder='Saisir votre acticle'
                onChangeText={inputHandler}
                value = {articleName}>
            </TextInput>
        
        <Button title="Enregistrer l'article" onPress={handleClik}>
        </Button>

        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        marginBottom: 15

    },
    textInput:{
      borderColor:'grey',
      padding :5,
      paddingLeft :10,
      flexGrow:1,
      fontSize:18
    },
})

export default AddProduct