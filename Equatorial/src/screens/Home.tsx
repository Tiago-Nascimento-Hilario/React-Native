import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import logoEquatorial from "../../assets/equatorial.png"
import Formulario from "../components/Formulario";
import { useState } from "react";


export default function Home() {

    const [tela, setTela] = useState(false);

    function handlerExibirFormulario() {
        setTela(true)
    }
    if (tela == false) {

        return (

            <View style={styles.container}>
                <StatusBar />
                <View>
                    <Image source={logoEquatorial} style={styles.logoEquatorial} />
                </View>
                <TouchableOpacity onPress={handlerExibirFormulario}>
                    <View style={styles.botao}>
                        <Text style={styles.textoBotao}>Acessar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    } else {
        return (
            <Formulario />
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        alignContent: "center"
    },
    logoEquatorial: {
        width: 300,
        height: 100,
    },
    botao: {
        marginTop: 100,
        backgroundColor: "#302e7a",
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    textoBotao: {
        fontSize: 22,
        color: "#FFF",
        fontWeight: "bold"
    }
})