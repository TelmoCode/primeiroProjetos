import React, { Component }  from 'react';
import { View, Text,StyleSheet,TextInput, Button} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
      this.state={
        nome: '',
        imput: ''

      }; 
    this.entrar = this.entrar.bind(this);
  }

  entrar(){  
    if(this.state.imput === ''){

      alert('Digite seu nome');
      return;
    }
    this.setState({nome: 'Bem vindo: ' + this.state.imput})
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.imput}
           placeholder='Digite seu nome' 
           underlineColorAndroid='transparent'
           onChangeText={(texto)  => this.setState({imput: texto})}
        /> 
         
        <Button 
        title='Entrar'
        onPress={this.entrar}
        />

        <Text style={styles.texto}> {this.state.nome}</Text>
        

      </View>
    ); 
  }  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  imput:{
    
    height:55,
    borderWidth:1,
    borderColor:'#222',
    padding:10,
    justifyContent:"center",
    margin:20,
    fontSize:20,
  },
  texto:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
   

  }
})

