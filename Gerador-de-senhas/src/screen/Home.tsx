import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"
import Menu from "./Menu"

export default function Home() {
    return (
        <View style={styles.container}>
            <Menu />
            <StatusBar />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    }
})