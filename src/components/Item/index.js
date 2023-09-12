import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Item = ({ data }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.itemText}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
