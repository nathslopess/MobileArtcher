// import nativeBase from 'native-base'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
import Logo3 from './assets/logo3.png'
import { Titulo } from './Components/Titulo'
import { EntradaTexto } from './Components/EntradaTexto'
import { useAppState } from 'native-base/lib/typescript/core/color-mode/hooks'


export default function Cadastro() {


  const [numSecao, setNumSecao] = useState(0)


  const secoes = [
    {
      id: 1,
      titulo: 'Cadastro',
      entradaTexto: [
        {
          id: 1,
          label: 'Name',
          placeholder: 'Your Name'
        },

        {
          id: 2,
          label: 'Email',
          placeholder: 'Your Email'
        }
      ]
    }
  ]

  function avancarSecao(){
    if ( numSecao < secoes.length - 1 ){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao() {
    if( numSecao > 0 ){
      setNumSecao(numSecao-1)
    }
  }

  return (
    <VStack flex={1} alignItems='center' justifyContent='center' padding={5}>
      <Image source={Logo}/>

      <Titulo>
        {secoes[0].titulo}
      </Titulo>

      <Box>
        {
          secoes[0].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
          })
        }

       <EntradaTexto label=' Create User' placeholder='Your User'/>

       <EntradaTexto label='Create Password' placeholder='Your Password'/>
      </Box>

      <Button width='30%' backgroundColor='blue.800' marginTop={10} borderRadius={21}>Sign Up</Button>
      <Button width='30%' backgroundColor='blue.800' marginTop={3} borderRadius={21} onPress={() => voltarSecao()}>Back</Button>
    </VStack>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });