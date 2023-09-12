import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponente from './src/components/Header/Header';
import { useState } from 'react';
import Nav from './src/components/Nav';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { useFonts } from 'expo-font';

export default function App() {
  const [screen, setScreen] = useState("home");

  const [fontsLoaded] = useFonts({
    TiliumBlack: require('./assets/Fonts/TitilliumWeb-Black.ttf'),
    TiliumBold: require('./assets/Fonts/TitilliumWeb-Bold.ttf'),
    TiliumLight: require('./assets/Fonts/TitilliumWeb-Light.ttf'),
  })

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponente
      title={"DogCenter"}
      />
    <View>
      <Nav
          setScreen={setScreen}
          screen={screen} />
    </View>
    {screen === "home" && <Home />}
    {screen === "buscador" && <Search />}
  </View>
  );
}
