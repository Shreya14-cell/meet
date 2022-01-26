import React from 'react'
import { View,Text, StyleSheet,TextInput } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'

 
function StartMeeting({ name,roomId,setName,setRoomId,joinRoom }){
    return(
        <View style={styles.startMeetingContainer}>
            <View style = {styles.info}>
                <TextInput 
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Your Name"
                    placeholderTextColor= "#373737"
                    onchangeText={text => setName(text)}
                />
            </View>
        <View style={styles.info}>
                <TextInput 
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Room ID"
                    placeholderTextColor= "#373737"
                    onchangeText={text => setRoomId(text)}
                />
            </View>
        <View style={{ alignItems: "center"}}>
            <TouchableOpacity
                onPress={()=>joinRoom()}
                style={styles.startMeetingButton}
            >
                <Text style={{ color: "white", fontWeight: "bold"}}>
                    START MEETING
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#ffffff",
        height: 60,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#322D31",
        padding: 12,
        justifyContent: "center",
        borderRadius: 40,
    },
    textInput: {
        color: "black",
        fontSize: 18
    },
    startMeetingButton: {
        width: 250,
        marginTop: 35,
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center"
    }
})