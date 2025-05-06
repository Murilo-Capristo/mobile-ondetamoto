import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../navigation/RootNavigator";
import Modal from "react-native-modal";
import { useState } from "react";


const roxo = '#f900cf';
const roxo_escuro = "#9F0095";
const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;


export default function Cadastro() {
    
    const navigation = useNavigation<LoginScreenNavigationProp>();
return(
    <LinearGradient colors={[roxo, roxo_escuro]} style={styles.container}>


    
        <View style={styles.logoContainer}>
            <Image
                source={require("../../assets/Vector.png")} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
        <View style={styles.formulario}>

                {/* Campo email */}
            <View style={styles.inputContainer}>
                <Icon name="person" size={20} color={"#fff"}></Icon>
                <TextInput
                placeholder="Email"
                placeholderTextColor="#ccc"
                style={styles.input}
                />
            </View>
                {/* Campo senha */}
                <View style={styles.inputContainer}>
                <Icon name="lock-closed" size={20} color={"#fff"}></Icon>
                <TextInput
                placeholder="Senha"
                placeholderTextColor="#ccc"
                style={styles.input}
            
                />
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {
                // Navegar para a tela de login
                navigation.navigate("HomeScreen");

            }}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginBottom: 30, alignItems:"center"}} onPress={() => {
                // Navegar para a tela de cadastro
                navigation.navigate("PreCadastro");

            }}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:"300"}}>
                Crie uma conta
            </Text>
        </TouchableOpacity>

        </View>
        </LinearGradient>


)

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        

    },
    logoContainer: {
        alignItems: "flex-start",
        // marginBottom: 20,
        marginTop: 90,
    },
    logo: {
        width: 300,
        height: 100,
        
    },
    input: {
        flex: 1,
        fontSize: 18, 
        color: "#fff",
      },
    inputContainer: {

        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        width: "80%",        
    },



    formulario:{
        width:'70%',
        height:'30%',
        borderRadius:20,
        paddingBottom: 40,
        paddingTop: 40,

        // marginTop:200,
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom:40,
    },
    textButton:{
        color:'#000',
        fontSize:20,
        fontWeight:'semibold',
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: '20%',
        alignItems: "center",
        marginBottom: 210,
        // marginTop: 20,
        width:'80%',
    },
})
