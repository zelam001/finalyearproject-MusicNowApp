import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const List = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.left}>
            <View style={styles.squa}></View>
            <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

export default List;
