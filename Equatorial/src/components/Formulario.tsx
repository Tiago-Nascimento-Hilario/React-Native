import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import logoEquatorial from "../../assets/equatorial.png"

import { useState } from 'react';

import Home from '../screens/Home';

export default function Formulario() {

    const [tela, setTela] = useState(false);

    function salvar() {
        alert("Dados salvo com sucesso! ")
        setInterval(()=>{

            setTela(true)
        },2000)
    }


    if(tela == false){
    return (
        <View>
            <View>
                <Image source={logoEquatorial} style={styles.logoEquatorial} />
            </View>
            <View style={styles.formulario}>
                <TextInput placeholder='NOME COMPLETO ' style={styles.input} />
                <TextInput placeholder='CPF' keyboardType='numeric' style={styles.input} />
                <TextInput placeholder='ENDEREÇO' style={styles.input} />
                <TextInput placeholder='EMAIL' keyboardType='email-address' style={styles.input} />
                <TextInput placeholder='WHATSAPP' keyboardType='phone-pad' style={styles.input} />
                <TouchableOpacity onPress={salvar}>
                    <View style={styles.botao}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )}else{
        return(<Home/>)
    }
}

const styles = StyleSheet.create({
    container: {

    },

    logoEquatorial: {
        marginTop: 20,
        width: 170,
        height: 60,

    },

    formulario: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },

    input: {
        padding: 5,
        fontSize: 16,
        marginStart: 3,
        marginEnd: 3,
        marginBottom: 15,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#302e7a"
    },

    botao: {
        marginTop: 20,
        backgroundColor: "#302e7a",
        width: 100,
        height: 30,
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