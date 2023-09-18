import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import styles from './style'
import HeaderComponente from '../../components/Header/Header';
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../../components/Categories";
import { useNavigation } from "@react-navigation/native";

const Home = ({ mode }) => {
  const navigation = useNavigation(); 
  return (
    <SafeAreaView>
      <HeaderComponente title={"DogCenter"} />
      <Categories navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
