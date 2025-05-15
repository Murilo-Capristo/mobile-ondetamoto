import { View, Text, StyleSheet } from 'react-native';
import HeaderReduzida from '../templates/HeaderReduzida';
import { Provider } from 'react-native-paper';

export default function FormMoto(){
    return(
        <Provider>
            <HeaderReduzida></HeaderReduzida>
            
            <View style={styles.container}>
                <View style={styles.tag}>
                    <Text style={styles.textTag}>Tag xxxx</Text>
                </View>
                
                <View style={styles.drawer}>
                    <Text>tipo</Text>
                    <Text>setores</Text>
                </View>

                <View style ={styles.placa}>
                    <Text style={styles.textPlaca}>Placa</Text>
                </View>

            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',

        margin:40,
    },
    tag: {
        
        backgroundColor: '#f900cf',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    textTag: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    drawer: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    placa: {
        backgroundColor: '#e0e0e0',
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    textPlaca: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});