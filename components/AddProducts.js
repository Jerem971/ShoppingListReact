import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const AddProduct = ({submitHandler}) =>{

    const [articleName,setArticleName] = useState("")
    const [isDisabled,setDisabled] = useState(false)

    const inputHandler = (name ) =>{
        setArticleName(name) // a chaque fois que le texte change, cela déclenche
                             // le useState qui actualise la valeur de l'article
    }

    useEffect(() =>{
        if(articleName.length > 2 ){
            setDisabled(false)
        }else{
            setDisabled(true)
        }

    },[articleName])

    
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
        
        <Button 
        title="Enregistrer l'article" 
        onPress={handleClik}
        disabled = {isDisabled}
        >
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