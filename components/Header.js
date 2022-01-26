import React from 'react'
import { View,Text,StyleSheet } from "react-native"
import Entypo from "react-native-vector-icons/Entypo";

function Header() {
    return(
        <View style={styles.container}>
            <Entypo name="list" size={30} color="#f0fff3" />  
            <Text style={styles.heading}>HELLO THERE!</Text>
            <Entypo name="back" size={30} color="#f0fff3" />  
                   
        </View>
    ) 
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    heading:{
        color: "#f0fff3",
        fontSize: 20,
        fontWeight: "700"
    }
})