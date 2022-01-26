import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "Start A Meeting"
    },
    {
        id: 2,
        name: "plus",
        title: "Join A Meeting"
    },
    {
        id: 3,
        name: "calendar",
        title: "Your Schedule"
    },
]

function MenuButtons({navigation}){


    const openMeeting = () => {
        navigation.navigate("Room")
    }
    return(
        <View style={styles.container}>
            { items.map((item,index) => 
            <View 
                key={index}
                style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>openMeeting()}
                    style={styles.button}
                >
                    <FontAwesome name = {item.name} size={25} color={"#000000"} />
                </TouchableOpacity>
                <Text style={styles.menuText}>{item.title}</Text>
            </View>
            )}
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1F1F1F",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer:{
        alignItems: "center"
    },
    button:{
        width: 50,
        height: 50,
        backgroundColor: "#2B68E6",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    menuText:{
        color: "#858585",
        fontSize: 15,
        fontWeight: "600",
        paddingTop: 10
    },
})