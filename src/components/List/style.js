import { View, FlatList } from "react-native";
import React from "react";
import Item from "../Item";

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item data={item} />}
    />
  );
};

export default List;
