
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
      <Image 
      source={require('../assets/logo.jpg')}
      style={styles.logo} 
      />
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>
      Quello List SuperMarket
      </Text>
      <Text style={styles.text}>
        Monte sua lista de compras com mais facilidade e rapidez, 
        otimizando o seu tempo!!
      </Text>
      <Link style={styles.button} href={"/home"}>
      <Text style={styles.buttonText}>Acessar o site</Text>
      </Link>
      <StatusBar style="light" backgroundColor='#000' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#236B8E',
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height:230,
    borderRadius:115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: "#dadada",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  Text: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#236B8E',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  }
});
