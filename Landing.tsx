import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
const roxo = '#B700AA';
const roxo_escuro = "#9F0095"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('./assets/Parking-rafiki.png')} style={styles.imagem} />
        <Image source={require('./assets/Vector.png')} style={styles.logo} />
      </View>
      <View style={styles.view2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>Novo por aqui?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#000000' }}>Conecte Já</Text>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 20,
    backgroundColor: "#86007d",
    alignItems: 'center',
    paddingHorizontal: "20%",
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },
  buttonText:{
    color: '#fff',
    fontSize: 46,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  imagem:{
width: '60%',
 height: '60%',
 resizeMode: 'contain',
  },
  logo:{
    width: '60%',
     height: '60%',
     resizeMode: 'contain',
     bottom: 30
      },
  view1: {
    marginBottom: 20,
    width: '100%',
    height: '35%',
    backgroundColor: roxo,
    alignItems: 'center',
  },
  view2:{
    alignItems: 'center',
    justifyContent: 'center'

  },
  container: {
    flex: 1,
    backgroundColor: roxo_escuro,
    alignItems: 'center',

  },
});
