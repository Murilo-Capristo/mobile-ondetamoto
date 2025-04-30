import { NavigationContainer } from "@react-navigation/native";
import Landing from "./Landing";
import PreCadastro from "./PreCadastro";
import Login from "./Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function AppTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     );
//   }

export default function PreApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="PreCadastro" component={PreCadastro} />
                <Stack.Screen name="Login" component={Login} />

               {/*<Stack.Screen name="App" component={AppTabs} /> {/* Add this line */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}