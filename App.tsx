import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Renan </Text>
      <Text style={styles.title}>R</Text>
      <Button title='Sending' />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string,
  color: string
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity style={estilo.botao}>
      <Text style={estilo.texto}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const estilo = StyleSheet.create({
  texto:{
    color: '#fff',
    fontSize: 20,
  },
  botao:{
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:44,
    color: '#000'
  }
});
