import React from "react";
import { View, Text, StyleSheet, NativeModules, Image } from "react-native";
const { AppDetails } = NativeModules;

class MyFlavorComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            pcg: "",
        }
    }

    componentDidMount = () => {
        console.log("component did mount");
        // let image;
        // AppDetails.appVersion(pcg => {
        //     if (pcg === "com.product_flavors.original"){
        //         image = "../assets/sponge.png"
        //     }else{
        //         image = "../assets/mario.png"
        //     }
        //     console.log("stuff: ", pcg);
        //     this.setState({
        //         pcg,
        //     })
        // });
    }

    imageComponent = () => {
        if (this.state.pcg === "com.product_flavors.original"){
            return (<Image 
                source = {require('../assets/sponge.png')} 
            />)
        }else{
            return (<Image 
                source = {require('../assets/mario.png')} 
            />)
        }
    }

    render(){
        const img = this.state.image;
        return(
            <View>
                <Text style={styles.innerText}>Package name here: {this.state.pcg}</Text>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>Picture Placeholder for now</Text>
                </View>
            </View>
        )
    }
}

export default MyFlavorComponent;

const styles = StyleSheet.create({
    innerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})
