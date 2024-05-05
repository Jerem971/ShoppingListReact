import React from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList,TouchableWithoutFeedback , TouchableOpacity, TouchableHighlight} from 'react-native';

const Product = (props) =>{
    return(
        <TouchableHighlight 
        activeOpacity={0.8}
        underlayColor="yellow"
        onPress={() => console.log("cliquer")}>
            <View style = {styles.items}>
                <Text style ={styles.element}> {props.name}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    items: {
        marginTop:10
    },
    element : {
        backgroundColor:'red',
        padding:20,
        fontSize:17,
        marginVertical:6

    },


})
// important pour avoir accès dans le parent
export default Product