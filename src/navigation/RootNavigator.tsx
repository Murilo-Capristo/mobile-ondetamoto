import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/LandingScreen";
import PreCadastro from "../screens/PreCadastroScreen";
import Login from "../screens/LoginScreen";
import Cadastro from "../screens/CadastroScreen";
import HomeScreen from "../screens/appScreens/HomeScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

export type RootStackParamList = {
    Landing: undefined;
    PreCadastro: undefined;
    Login: undefined;
    Cadastro: undefined;
    HomeScreen: undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  export default function RootNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="PreCadastro" component={PreCadastro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen 
          name="HomeScreen" 
          component={BottomTabsNavigator} 
          options={{headerShown: false}} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
