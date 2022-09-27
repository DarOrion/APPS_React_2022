import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multiplicar: 0,
      multi1: 0,
      multi2: 0,
    };

    this.Multiplicar = this.Multiplicar.bind(this);
  }

  Multiplicar() {
    this.setState({
      multiplicar: this.state.multi1 * this.state.multi2,
    });
  }
 

  render() {
    return (
      <View style={styles.container}>

         
        <Text style={{color: 'black', fontSize: 25, margin: 0, textAlign: "center" }}> Multiplicador de dois Números </Text>

  


        <TextInput style={styles.input} placeholder="Por favor, digite o 1º número?" 
        onChangeText={ (m1) => this.setState({multi1: m1}) } />

        <TextInput style={styles.input} placeholder="Por favor, digite o 2º número?" 
        onChangeText={ (m2) => this.setState({multi2: m2}) }/>

        <Button color="green" title="Multiplicar" onPress={this.Multiplicar} />

        <Text style={{color: 'black', fontSize: 25, margin: 0, textAlign: "center" }}>Resultado: {this.state.multiplicar} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
  botao: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#999',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
  },
});




export default App;