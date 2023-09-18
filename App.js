import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/Navigation/RootNavigation';

export default function App() {

  const [fontsLoaded] = useFonts({
    TiliumBlack: require('./assets/Fonts/TitilliumWeb-Black.ttf'),
    TiliumLight: require('./assets/Fonts/TitilliumWeb-Light.ttf'),
  })

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
