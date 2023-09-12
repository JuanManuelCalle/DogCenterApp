import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import styles from './style'

const Home = ({ mode }) => {
  return (
    <View style={[styles.container, styles[mode]]}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.ibb.co/Gc1zhhC/Dog-Center.jpg"
          }}
        />
        <View style={styles.containerHomeText}>
          <Text style={styles.textHome}>DogCenter</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
