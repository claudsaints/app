import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";
import { Welcome } from "../screens/Welcome";
import { AppRoutes } from "./app.routes";
const Stack = createNativeStackNavigator();

export function AuthRoutes(){    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen name="cadastro" component={Cadastro}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="home" component={AppRoutes}/>
        </Stack.Navigator>

    )
}

