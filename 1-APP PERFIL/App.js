import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    
    let img = 'https://siga.cps.sp.gov.br/image//N4Y9ZJZ38Y8E4S5TESCDT3SWJIEV9U.TMB.JPG';
 
    return(
      <View>
        
        <Text style={{color: 'BLACK', fontSize: 35, margin: 15, textAlign: "center" }}>Meu Perfil</Text>
        <Text style={{color: '#FF0000', fontSize: 45, margin: 15}}>  React Native</Text>
 
        <Image  source={{ uri: img }}  style={{ width: 300, height: 300}}  />
         
        
         <Text style={{color: 'black', fontSize: 30, margin: 0, textAlign: "left" }}>Nome:</Text>
         <Text style={{color: 'blue', fontSize: 20, margin: -30, textAlign: "center" }}>         Marcelo Felicio Pereira</Text>
         <br/>
         
         <Text style={{color: 'black', fontSize: 30, margin: 0, textAlign: "left" }}>RA: </Text>
         <Text style={{color: 'blue', fontSize: 20, margin: -30, textAlign: "center" }}>1290482023002</Text>
         <br/>
          
         <Text style={{color: 'black', fontSize: 30, margin: 0, textAlign: "left" }}>Formação:</Text>
         <Text style={{color: 'blue', fontSize: 20, margin: -10, textAlign: "center" }}>Na Area da programação e desenvolvimento nenhuma</Text>
         <br/>
         
         <Text style={{color: 'black', fontSize: 30, margin: 0, textAlign: "left" }}>Experiência:</Text>
         <Text style={{color: 'blue', fontSize: 20, margin: -10, textAlign: "center" }}>Só na Area de Hardware e S.O</Text>
         <br/>

         <Text style={{color: 'black', fontSize: 30, margin: 0, textAlign: "left" }}>Projeto:</Text>
         <Text style={{color: 'blue', fontSize: 20, margin: -10, textAlign: "center" }}>Alguns em andamento</Text>
 
      </View>
    )
  }
}
 
export default App;