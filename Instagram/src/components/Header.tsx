import { View, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require("../../assets/logo.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.send} source={require("../../assets/send.png")} />
            </TouchableOpacity>
            <StatusBar />

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
        elevation: 3,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",

    },
    send: {
        width: 25,
        height: 25
    }
});