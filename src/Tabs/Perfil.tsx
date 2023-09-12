import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../Components/Titulo"



export default function Perfil() {
    return(
       <ScrollView flex={1}>
        <VStack flex={1} alignItems='center' padding={5}>
            <Titulo color='blue.500' >Meu Perfil</Titulo>

            <Avatar size='xl' source={{  uri:'https://avatars.githubusercontent.com/u/101108268?v=4'  }} marginTop={5}/>

            <Titulo color='blue.500'>
                Meus Dados
            </Titulo>

            <Titulo fontSize='lg' marginBottom={1}>
                Nathalia Lopes
            </Titulo>

            <Text>
                @llopes.nath
            </Text>

            <Text>
                iOS - Fiap
            </Text>

            <Divider marginTop={5}/>

            <Text color='blue.500' >
                Feed
            </Text>
        </VStack>
       </ScrollView>
    )
}