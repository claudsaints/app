import { Text } from "react-native"
import { Container,StlBtn } from "../components/index"

export function Welcome({navigation}:any){
    return(
        <Container>
            <Text>Welcome</Text>
            <StlBtn onPress={() => navigation.navigate('home') }>
                Hi
            </StlBtn>
        </Container>
    )
}