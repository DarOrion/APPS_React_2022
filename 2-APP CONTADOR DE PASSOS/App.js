import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    
    this.aumentar = this.aumentar.bind(this);
 
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    this.setState({ contador: this.state.contador + 1 })
  }

  diminuir() {
    if (this.state.contador > 0)
      this.setState({ contador: this.state.contador - 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 48, textAlign: 'center'}}>{this.state.contador}</Text>

        <Text
          style={{
            color: '#FF0000',
            fontSize: 25,
            margin: 15,
            textAlign: 'center',
          }}>
          Contador de Pessoas{' '}
        </Text>

        <Button color="green" title="Inserir +" onPress={() => this.aumentar()} />

        <Button color="red" title="Remover -" onPress={() => this.diminuir()} />
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