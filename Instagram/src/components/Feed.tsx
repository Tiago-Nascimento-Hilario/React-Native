import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import likeada from "../../assets/likeada.png";
import send from "../../assets/send.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";

const data = [
  {
    id: '1',
    nome: 'Lucas Silva',
    descricao: 'Mais um dia de muitos bugs :)',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
    likeada: true,
    likers: 1
  },
  {
    id: '2',
    nome: 'Matheus',
    descricao: 'Isso sim é ser raiz!!!!!',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
    likeada: false,
    likers: 0
  },
  {
    id: '3',
    nome: 'Jose Augusto',
    descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
    likeada: true,
    likers: 3
  },
  {
    id: '4',
    nome: 'Gustavo Henrique',
    descricao: 'Isso sim que é TI!',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
    likeada: false,
    likers: 1
  },
  {
    id: '5',
    nome: 'Guilherme',
    descricao: 'Boa tarde galera do insta...',
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
    likeada: true,
    likers: 32
  }

]
export default function Feed() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item) => (
        <View style={styles.container} key={item.id}>

          <View style={styles.imgPerfilNome}>
            <Image style={styles.imgPerfil} source={{ uri: item.imgperfil }} />
            <Text style={styles.nome}>{item.nome}</Text>
          </View>

          <Image style={styles.imgPublicacao} source={{ uri: item.imgPublicacao }} />

          <View style={styles.containerIcones}>
            {item.likeada == true ? <Image style={styles.icones} source={likeada}/> : <Image style={styles.icones} source={like}/> }
            <Image style={styles.icones} source={comment}/>
            <Image style={styles.icones} source={send}/>     
          </View>
          <Text style={{fontWeight:"bold"}}>{item.likers > 1 ? item.likers + " curtidas": item.likers+ " curtida"}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
          <Text>{item.descricao}</Text>

        </View>
      ))}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 2
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 30
  },
  imgPerfilNome: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6
  },
  nome: {
    fontSize: 22
  },
  imgPublicacao: {
    width: "100%",
    height: 300
  },
  containerIcones:{
    flexDirection:"row",
    marginTop:4
  },
  icones:{
    width:25,
    height:25
  }
})
