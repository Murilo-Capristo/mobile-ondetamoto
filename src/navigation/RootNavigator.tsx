import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import PreCadastro from "../screens/PreCadastro";
import Login from "../screens/Login";

export type RootStackParamList = {
    Landing: undefined;
    PreCadastro: undefined;
    Login: undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  export default function RootNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="PreCadastro" component={PreCadastro} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
