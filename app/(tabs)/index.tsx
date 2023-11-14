import { StyleSheet,Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View,  } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      
      <View style ={{flexDirection: "row"}}> 
      <View style={styles.box1}>
      <Image style={styles.stretch}
      
      source={require("../(tabs)/img/students.png")} />
        <Text style={styles.text1}>Attendances</Text>
        
      </View>
      <View style={styles.box2}>
      <Image style={styles.stretch}
      
        source={require("../(tabs)/img/parents.png")} />
        <Text style={styles.text2}>Request</Text>
        
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text1: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 13,
  },
  text2: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 13,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  box1: {
    marginLeft: 30,
    marginRight: 30,
    alignSelf: "stretch",
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 50,
    
  },
    box2: {
    marginLeft: 3,
    marginRight: 30,
    alignSelf: "stretch",
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

});