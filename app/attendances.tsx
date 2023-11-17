import { StyleSheet,Image, Pressable, Button} from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Monday, 10 Nov 2023 </Text>
      <Text style={styles.title}>7:00 A.M</Text>
      <View style ={{flexDirection: "row"}}>  
      <View style={styles.box1}>
      <Image style={styles.stretch1}
      source={require("../app/(tabs)/img/arrival.png")} />
      <Text style={styles.text1}>Students Arrived</Text>
      <Text style={styles.para1}>25</Text>
      </View>
      <View style={styles.box2}>
      <Image style={styles.stretch2}
      source={require("../app/(tabs)/img/goal.png")} />
      <Text style={styles.text2}>Students Late</Text>
      <Text style={styles.para2}>2</Text>
      </View> 
      </View> 
      <View style={styles.box3}> 
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.circle1}
          source={require("../app/(tabs)/img/pic.jpg")} />
      <Text style={styles.textReq1}>Lily Shen</Text> 
    
      </View>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.parabox3}>Check-In: </Text>
      <Text style={styles.para2box3}>Check-Out: </Text>
      </View>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.parabox3text}> Null</Text>
      <Text style={styles.para2box3text}> Null</Text>
      </View>
      <View style={styles.screenContainer1}>
      <Button title=" Set Arrived" color={'#FEFBFB'}  />
    </View>
      </View>
      <View style={styles.box4}> 
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.circle1}
          source={require("../app/(tabs)/img/pic2.jpg")} />
      <Text style={styles.textReq1}>Andrew Lim</Text> 
    
      </View>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.parabox3}>Check-In: </Text>
      <Text style={styles.para2box3}>Check-Out: </Text>
      </View>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.parabox4text}> 6:50 A.M.</Text>
      <Text style={styles.para2box4text}> Null</Text>
      </View>
      <View style={styles.screenContainer2}>
      <Button title="Check-In" color={'#FEFBFB'}  />
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
  title1: {
    fontSize: 15,
    color: "grey",
  },
  title: {
    marginTop:10,
    fontSize: 38,
    fontWeight: 'bold',
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
    marginTop: 30,
    
  },
  text1: {
    
    textAlign: "center",
    marginTop: 5,
  },
  stretch1: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    marginLeft:40,
  },
  para1: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 5,
    fontSize: 30.
  },
  box2: {
   
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
    marginTop: 30,
    
  },
  text2: {
    
    textAlign: "center",
    marginTop: 5,
  },
  stretch2: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    marginLeft:40,
  },
  para2: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 5,
    fontSize: 30.
  },
  box3: {
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
    marginTop: 25,
    
  },
  box4: {
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
    marginTop: 25,
    
  },
  circle1: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  textReq1: {
    color: '#168CFA',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 8,
    paddingTop:5,
  },
    parabox3: {
    color: '#9FA8B0',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 40,
  },
  para2box3: {
    
      color: '#9FA8B0',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 20,
  },
  parabox3text: {
    color: '#C70039',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 50,
    marginTop: 10,
  },
  para2box3text: {
    
      color: '#C70039',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 90,
      marginTop: 10,
  },
  textReq2: {
    color: '#9FA8B0',
    fontSize: 13,
    marginLeft: 50,
    marginTop: 10,
  },
  screenContainer1: {
    marginLeft: 10,
    marginRight: 25,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: '#0F0F0F',
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#ED1922",
    marginTop: 15,
  },
  screenContainer2: {
    marginLeft: 10,
    marginRight: 25,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: '#959494',
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#959494",
    marginTop: 15,
  },
  parabox4text: {
    color: '#27AE60',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 40,
    marginTop: 10,
  },
  para2box4text: {
    
      color: '#C70039',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 50,
      marginTop: 10,
  },
});
