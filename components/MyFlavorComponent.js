import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MyFlavorComponent = (props) => {

    const imageComponent = () => {
        if (props.pcg === "com.product_flavors.spongebob"){
            return (<Image 
                style={styles.image}
                source = {require('../assets/sponge.png')} 
            />)
        }else{
            return (<Image 
                style={styles.image}
                source = {require('../assets/mario.png')} 
            />)
        }
    }
    return(
        <View style={styles.wrap}>
            <Text style={styles.innerText}>Package name here: {props.pcg}</Text>
            <View style={styles.imageWrap}>
                {imageComponent()}
            </View>
        </View>
    )
}

export default MyFlavorComponent;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
    },
    innerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    imageWrap: {
        justifyContent: "center", 
        alignItems: "center",
        width: 300,
        height: 400
    },
    image:{
        flex: 1,
        resizeMode: "contain"
    }
})
