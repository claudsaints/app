import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile,Config,Food,Ia} from "../screens";

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Tab.Navigator initialRouteName="profile">
            <Tab.Screen name="profile" component={Profile}/>
            <Tab.Screen name="config" component={Config}/>
            <Tab.Screen name="search" component={Food}/>
            <Tab.Screen name="IA" component={Ia}/>
        </Tab.Navigator>
    )
}