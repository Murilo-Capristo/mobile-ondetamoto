import { View, Text } from "react-native";
import HeaderReduzida from "../templates/HeaderReduzida";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function CadastroMoto() {
    return (
        <View>
            <HeaderReduzida></HeaderReduzida>
            <View style={styles.title}>
                <Text style={styles.titleText}>Cadastro de Moto</Text>
            </View>
            <View style={styles.detectarMoto}>
                <Icon name="wifi-tethering" style={styles.icon}></Icon>
                <Text style={styles.detecText}>Detectar Motocicleta</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    detecText:{
        fontSize: 29,
        fontWeight: "semibold",
        color: "#000",
    }
    ,detectarMoto: {

        marginTop:50,
        margin:40,
        paddingTop: 40,
        paddingBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DCDEDF",
        borderRadius: 20,
        borderColor: "#009213",
        borderWidth: 4,
    },
    title: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 3, 
        color: "#009213",
        fontSize: 35,
    },

});