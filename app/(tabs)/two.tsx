import { StyleSheet,Image, Pressable } from 'react-native';
import { Link,  } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}> 
      <Text style={styles.title}>11 October 2023</Text>
      <Link href="/PendingRequest" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title2}>View All</Text>
                )}
              </Pressable>
      </Link>
      
      </View>
      
      <View style={styles.separator} lightColor="#9B9897" darkColor="rgba(183,183,183)" />
      <View style ={{flexDirection: "row"}}>
      <Image style={styles.circle}
      source={require("../(tabs)/img/man.png")} />
      <Text style={styles.textNoti}>Encik Ramli notified Late</Text>
      
      </View>
      <Text style={styles.textNoti1}>7:40 A.M, Monday</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  circle: {
    width: 65,
    height: 65,
  
    borderRadius: 30,
  },
  textNoti: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    paddingTop:15,
    paddingLeft: 8,
  },
  textNoti1: {
    color: '#818181',
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    paddingLeft: 130,
    paddingTop: 3,
    color: '#ED174E',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 15,
  },
});
