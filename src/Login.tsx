// import nativeBase from 'native-base'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
import Logo3 from './assets/logo3.png'
import { Titulo } from './Components/Titulo'
import { EntradaTexto } from './Components/EntradaTexto'


export default function Login() {
  return (
    <VStack flex={1} alignItems='center' justifyContent='center' padding={5}>
      <Image source={Logo}/>

      <Titulo>
        Account
      </Titulo>

      <Box>
        <EntradaTexto label='Name' placeholder='Your Name'/>

        <EntradaTexto label='Email' placeholder='Your Email'/>
      </Box>

      <Button width='30%' backgroundColor='blue.800' marginTop={12} borderRadius={21}>Sign In</Button>

      <Link href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dpt-BR&ec=GAlA8wE&hl=pt-BR&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S470259728%3A1694130596167021&theme=glif'> 
          Login with 
      </Link>

      <Box width='100%' flexDirection='row' justifyContent='center'>
        <Text>Ainda não tem conta?</Text>
        <TouchableOpacity>
          <Text color='green.500' > Sign Up</Text>
        </TouchableOpacity>
      </Box>
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