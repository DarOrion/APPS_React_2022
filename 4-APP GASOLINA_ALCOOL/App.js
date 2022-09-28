import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet  } from 'react-native';
import { styles } from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    resultado: 0,
    num1: 0,
    num2: 0,
    mensagem: ''
    };

    this.Calcular = this.Calcular.bind(this);
  }

  Calcular() {
    let calcular = this.state.num1 / this.state.num2
    
  };


  render() {
  let img = 'https://uploads.metropoles.com/wp-content/uploads/2018/02/23194414/info_combustivel1.gif';

    return (

      <View style={styles.container}>
        <Text style={{ color: 'black', fontSize: 30, margin: 15, fontWeight: "bold",
        textDecorationLine: 'underline' , textAlign: 'center' }}>  Álcool ou Gasolina ? </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 320, borderColor: 'black', borderWidth: 3, }}/>

        <TextInput
          style={styles.input} placeholder="Preço do Álcool?"
          onChangeText={(n1) => this.setState({ num1: n1 })}
        />


        <TextInput style={styles.input} placeholder="Preço da Gasolina?"
          onChangeText={(n2) => this.setState({ num2: n2 })}
        />



        <Button
          color="green"
          title="Verificar"
          onPress={this.calcular}
        />

        <Text style={{ color: 'black', fontSize: 30, margin: 15, fontWeight: "bold" }}> {' '}
         Resultado: {this.state.calcular} </Text>
      </View>
    );
  }
}

export default App;