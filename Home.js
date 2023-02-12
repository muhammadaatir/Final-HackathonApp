import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, 
    Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <>
        <View style={styles.main_body}>
          <Image source={require('./assets/images/logo.png')} style={styles.logo_image} />
          <View style={styles.logo}>
            <Text style={styles.saylani_heading}>Saylani Welfare </Text>
            <Text style={styles.store_heading}>Online Discount Store {'\n'}</Text>
          </View>
          <View style={styles.button_div}>
            <TouchableOpacity
              onPress={() => navigation.replace('Login')}
              style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
    main_body: {
      flex: 1,
      backgroundColor: "#fff",
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#61B846',
      padding: 15,
      width: '75%',
      margin: 'auto',
      marginTop: '30%',
      borderRadius: 15,
      elevation: 8,
    },
    buttonText: {
      fontSize: 30,
      fontWeight: 'bold',
      color : '#fff'
    },
    button_div: {
      alignItems: 'center',
    },
    logo_image: {
      width: 320,
      height: 265,
      resizeMode: 'contain',
      marginTop: '30%',
      marginLeft: 20,
      marginRight: 20,
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: 50,
    },
    saylani_heading: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#61B846',
    },
    store_heading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#024F9D',
    },
});

HomeScreen.navigationOptions = {
  headerShown: false,
};
  
export default HomeScreen