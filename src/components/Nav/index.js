import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import styles from './style'

const Nav = ({setScreen, screen }) => {
  return (
    <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => setScreen("home")} activeOpacity={0.8}>
          <View style={styles.buttonMenu}>
            <FontAwesome
              name="home"
              size={20}
              color={
                screen === "home" ? colors.moradoClaro : colors.white
              }
            />
            <Text
              style={[
                styles.textMenu,
                screen === "home" && styles.textMenuFocused,
              ]}
            >
              Inicio
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setScreen("buscador")}
          activeOpacity={0.8}
        >
          <View style={styles.buttonMenu}>
            <FontAwesome
              name="search"
              size={20}
              color={
                screen === "buscador" ? colors.moradoClaro : colors.white
              }
            />
            <Text
              style={[
                styles.textMenu,
                screen === "buscador" && styles.textMenuFocused,
              ]}
            >
              Productos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  );
};

export default Nav;
