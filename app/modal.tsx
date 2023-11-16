import { StyleSheet,Image,Pressable,Button} from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Events & Announcements</Text>
      <View style={styles.separator} lightColor="#9B9897" darkColor="rgba(183,183,183)" />
      <View style ={{flexDirection: "row"}}> 
      <View style={styles.box1}>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.screenContainer1}>
      <View style ={{flexDirection: "row"}}>
        <Image style={styles.circle}
        source={require("../app/(tabs)/img/promotion.png")} />
        <Button title="Independence Day" color={'#080805' }  />
         </View>      
    </View> 
      </View>
      <Text style={styles.textReq1}>School will remain close on 14th August 2019</Text>
      <View style={styles.separator1} lightColor="#9B9897" darkColor="rgba(183,183,183)" />
      <Text style={styles.textReq5}>Read More</Text>
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
    width: 25,
    height: 25,
    marginTop: 7,
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
    marginTop: 5,
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
