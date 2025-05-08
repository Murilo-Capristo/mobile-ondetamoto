import { View, Text,StyleSheet,Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const roxo = '#f900cf';
const roxo_escuro = "#9F0095";

export default function HeaderReduzida() {
    return (
        <View>
            <View style={styles.header}>
            <View style={styles.topHeader}>
                <View style={styles.linkProfile}>
                    <Icon 
                name="person-circle-outline" 
                size={30} 
                color={"#000"}
                ></Icon>
                <Text style={styles.TextProfile}>Arnaldo</Text>
                </View>
                <View>
                <Image 
                source={require("../../../assets/logo-preenchida.png")}
                style={styles.logo} />
                </View>
            </View>
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
    topHeader:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center", 
        paddingTop: 30,
        paddingBottom: 10,
        position: "relative",

    },
    header:{
        backgroundColor: "#fff",
        borderBottomColor: roxo,
        borderBottomWidth: 20,
    },
    TextProfile:{
        fontSize: 17,  
        fontWeight: "bold",
    },
    linkProfile:{
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        resizeMode: "contain",
        height: 50,
        left: 20,
        top: 30,
    },
    logo:{
        width: 120,
        resizeMode: "contain",
        height: 45,

    },
});