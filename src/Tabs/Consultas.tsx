import { VStack, Text } from "native-base"
import { Restaurantes } from "../Components/Restaurantes"
import Consulado from '../assets/consulado2.jpg'

export default function Consultas() {
    return(
        <VStack p={5}>
            <Text>
                Consulta
            </Text>
            <Restaurantes
                nome='Consulado Mineiro'
                descricao='Especialidade em Comida Mineira'
                avatar={Consulado}
            />
        </VStack>
    )
}