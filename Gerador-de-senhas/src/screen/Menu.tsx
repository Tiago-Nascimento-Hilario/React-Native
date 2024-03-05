import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../../assets/cadeado.png";
import { useState } from "react";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function Menu() {

    const [senha, setSenha] = useState("Senha");

    function handleGeraSenha() {
        let novaSenha:string = uuidv4();
        setSenha(novaSenha.slice(0,6));
    }

    return (
        <View>
            <View>
                <Image source={logo} style={styles.imagem} />
            </View>
            <View style={styles.senha}>
                <Text style={styles.descricaoSenha}>{senha}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.botao} onPress={handleGeraSenha}>
                    <Text style={styles.descricaoBotao}>Gerar senha</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 250,
        height: 250,
        borderRadius: 140
    },
    botao: {
        backgroundColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        alignItems: 'center'
    },
    descricaoBotao: {
        fontSize: 28,
        color: "#121212"
    },
    senha: {
        backgroundColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    descricaoSenha: {
        fontSize: 28
    }
})