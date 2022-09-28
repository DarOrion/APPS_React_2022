import React, { Component } from 'react';

import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      mensagem: ''
    };

    this.Aleatorio = this.Aleatorio.bind(this);
  }

  Aleatorio() {

    let naleatorio = Math.floor(Math.random() * 10)
    this.setState({ mensagem: naleatorio })

  }


  render() {
    let img = 'https://miro.medium.com/max/1280/1*Av2WP1OqHxRconElsVTDnQ.gif';

    return (
      // Colocando o titulo 
      <View style={styles.container}>
        <Text style={{ color: 'blue', fontSize: 20, margin: 15, fontWeight: 'bold', textDecorationLine:'underline', 
         textDecorationColor: 'black' }}> JOGO DO NÚMERO ALEATÓRIO </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250 }}
        />

        <Text style={{ color: 'black', fontSize: 17, margin: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}>
        Pense em qualquer número de 0 a 10  </Text>
          
        <Text style={{ color: 'Black', fontSize: 40, margin: 20, fontWeight: 'bold' }}>  {' '} 
        {this.state.mensagem} </Text>

        <Button color = "blue" title="Descobrir" onPress={this.Aleatorio} />
       
        </View>
    );
  }
}

export default App;