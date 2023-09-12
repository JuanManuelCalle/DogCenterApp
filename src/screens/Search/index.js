import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import List from "../../components/List";
import DATA from "../../data";

const Searcher = () => {
  const [input, setInput] = useState("");
  const [places, setPlaces] = useState(DATA);

  const searchPlace = () => {
    if (input === "") {
      setPlaces(DATA);
      return;
    }
    const filterPlaces = DATA.filter((item) =>
      item?.name?.toLowerCase().includes(input.toLowerCase())
    );
    setPlaces(filterPlaces);
  };

  const onCleanInput = () => {
    setInput("");
    setPlaces(DATA);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerAddItem}>
        <Input
          onChangeText={setInput}
          value={input}
          onPress={onCleanInput}
        />
        <Button onPress={searchPlace} />
      </View>
      <View style={{ flex: 1 }}>
        <List data={places} />
      </View>
    </View>
  );
};

export default Searcher;
