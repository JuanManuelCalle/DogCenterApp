import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

const Input = ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        cursorColor={colors.AzulRey}
        //secureTextEntry={true}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <AntDesign
          name="closecircleo"
          size={24}
          color={colors.AzulRey}
          style={styles.inputButton}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Input;
