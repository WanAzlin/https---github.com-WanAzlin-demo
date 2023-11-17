import { StyleSheet,Image,Pressable } from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View,  } from '../../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Welcome </Text>
      <Text style={styles.title}>Wan Azlin</Text>
      
      <View style ={{flexDirection: "row"}}> 
      <View style={styles.box1}>
      <Image style={styles.stretch}
      
      source={require("../(tabs)/img/students.png")} />
      <Link href="/attendances" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.text1}>Attendances</Text>
                )}
              </Pressable>
      </Link>
            

        
        
      </View>
      <View style={styles.box2}>
      <Image style={styles.stretch}
      
        source={require("../(tabs)/img/parents.png")} />
          <Link href="/PendingRequest" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.text1}>Request</Text>
                )}
              </Pressable>
      </Link>
        
      </View>
      </View>
      <View style={styles.button}>
          <Link href="/request" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image style={styles.stretch}
      
                  source={require("../(tabs)/img/add.png")} />
                  
                )}
              </Pressable>
      </Link>
                  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    width: 150,
    height: 150,
    marginTop: 200,
    marginLeft:230,
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
    marginLeft: 20,
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
  title1: {
    fontSize: 15,
    color: "grey",
  },
  title: {
    marginTop:10,
    fontSize: 35,
    fontWeight: 'bold',
  },

});
