import { StyleSheet,Image,} from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.circle}
        source={require("../app/(tabs)/img/test.jpg")} />
      <Text style={styles.title}>Celebrate Independence Day Together with Happy Parents!</Text>
      <Text style={styles.textReq1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  circle: {
    width: 350,
    height: 250,
    marginTop: 10,
    
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
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
    marginLeft: 10,
    
    alignSelf: "stretch",
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
    borderRadius: 10,
    marginTop: 10,
    
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
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textReq1: {
    color: '#818181',
    fontSize: 14,
    marginTop: 15,
  },
  textReq5: {
    color: '#2186EA',
    fontSize: 15,
    alignSelf: 'center',
    margin: 5,
    paddingBottom:5,
    fontWeight: 'bold',
  },
  textReq2: {
    color: '#818181',
    fontSize: 15,
    marginTop: 15,
  },
  textReq3: {
    color: '#168CFA',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 8,
    paddingTop:5,
  },
  screenContainer1: {
    marginLeft: 25,
    marginRight: 60,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: '#0F0F0F',
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 15,
  },
  separator1: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 15,
  },
});
