import { StyleSheet,Image,Pressable,Button} from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>1 Pending </Text>
      <Text style={styles.title}>Request</Text>
      
      <View style ={{flexDirection: "row"}}> 
      <View style={styles.box1}>
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.circle}
          source={require("../app/(tabs)/img/man.png")} />
      <Text style={styles.textReq3}>Encik Ramli</Text>  
      </View>
      
      <Text style={styles.text1}>Request for Late Drop Student</Text>
      
      <Text style={styles.textReq1}>7:40 A.M, Monday</Text>
      <View style ={{flexDirection: "row"}}> 
      <Text style={styles.textReq2}>Status: Pending Approval</Text>      
      <View style={styles.screenContainer1}>
      <Button title="Noted" color={'#FEFBFB' }  />
    </View>
      
      </View>
      
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
  circle: {
    width: 35,
    height: 35,
  
    borderRadius: 30,
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
    borderRadius: 20,
    marginTop: 30,
    
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
    marginTop: 5,
    fontSize: 35,
    fontWeight: 'bold',
  },
  textReq1: {
    color: '#818181',
    fontSize: 15,
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
    marginLeft: 10,
    marginRight: 25,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: '#0F0F0F',
    borderWidth: 2,
    paddingHorizontal: 10,
    
    
    backgroundColor: "#FF5733",
    marginTop: 8,
  }
});
