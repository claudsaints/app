import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "@screens/Profile";
import { Config } from "@screens/Config";

const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen name="Home" component={Profile}/>
            <Screen name="Config" component={Config}/>
        </Navigator>
    )
}