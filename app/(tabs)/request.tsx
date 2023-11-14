
import { StyleSheet, TextInput, Button} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';

export default function TabOneScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Late</Text>
      <Text style={styles.para}>Let us know why your children are late</Text>
      <Text style={styles.textInput}>Date & Time: </Text>
      <TextInput  style={styles.input} placeholder='11 October 2023 || 8 :00 A.M ' />
      <Text style={styles.textInput}>Parents: </Text>
      <TextInput   style={styles.input} placeholder='Encik Ramli' />
      <Text style={styles.textInput}>Reason: </Text>
      <TextInput style={styles.input}  placeholder='Alex have not gotten up from bed'/>
      
      <View style={styles.screenContainer}>
      <Button title="Send" color={'#0F0F0F'}  />
    </View>
    
      
      </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'flex-start',
    margin:  10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin:  10,
    padding: 10,
    marginBottom:"1%",
  },
  para: {
    fontSize: 13,
    fontWeight: 'regular',
    margin:  20,
    marginTop:"1%",
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 12,
    width: 330,
    margin: 13,
    marginTop: -5,
    color:'#F5725B',
    
    
  },
  textInput: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
  },
  screenContainer: {
    margin: 10,
    marginRight: 30,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: '#0F0F0F',
    borderWidth: 2,
    paddingHorizontal: 120,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#DAF7A6",
    marginTop: 20,
  }
});
