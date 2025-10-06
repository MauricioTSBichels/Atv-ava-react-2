import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("https://www.fabiooliveira.cloud/api_aula/filmes/", {
      headers: {
        Authorization: "a8ea3f9c1e47b2d89f0d41b7f3c2d0c6",
      },
    })
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .catch((error) => console.error("Erro ao buscar filmes:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filmes da Marvel</Text>
      <ScrollView>
        <View style={styles.grid}>
          {filmes.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.poster }} style={styles.poster} />
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.texto}>Franquia: {item.franquia}</Text>
              <Text style={styles.texto}>Ano: {item.ano}</Text>
              <Text style={styles.texto}>Bilheteria:</Text>
              <Text style={styles.valor}>
                R$ {item.bilheteria.toLocaleString("pt-BR")}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a11e1e",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  titulo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "white",
    width: "45%",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    elevation: 5,
  },
  poster: {
    width: 120,
    height: 170,
    borderRadius: 8,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  texto: {
    fontSize: 12,
    color: "#333",
  },
  valor: {
    color: "#a11e1e",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 2,
  },
});
