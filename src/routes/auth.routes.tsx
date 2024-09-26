import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "@screens/Cadastro";
import { Login } from "@screens/Login";
import { Welcome } from "@screens/Welcome";
const {Navigator,Screen} = createNativeStackNavigator();

export function AuthRoutes(){    
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="welcome" component={Welcome}/>
            <Screen name="cadastro" component={Cadastro}/>
            <Screen name="login" component={Login}/>
        </Navigator>

    )
}

