import React, { Component } from "react";
import { View, Text, StyleSheet, Image, NativeModules } from "react-native";
const { PackageReader } = NativeModules;


class MyFlavorComponent extends Component{
    constructor(){
        super()
        this.state = {
            pcg: ""
        }
    }

    componentDidMount = () => {
        PackageReader.packageReader(pcg => {
            this.setState({ pcg });
        })
    }

    imageComponent = () => {
        if (this.state.pcg === "com.android_flavors.spongebob"){
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
    
    render(){
        return(
            <View style={styles.wrap}>
                <Text style={styles.innerText}>Package name here: {this.state.pcg}</Text>
                <View style={styles.imageWrap}>
                    {this.imageComponent()}
                </View>
            </View>
        )
    }
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
