import React from 'react'
import { View,StyleSheet,SafeAreaView } from "react-native"
import Header from "../components/Header"
{/*import SearchBar from '../components/SearchBar'*/}
import MenuButtons from '../components/MenuButtons'

function Home( { navigation } ) {
    return(
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%'}}>
                <Header />
                {/*<SearchBar />*/}
                <MenuButtons navigation = {navigation}/>
            </SafeAreaView>
        </View>
    ) 
}

export default Home 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#17181f",
        padding: 15
    }
})