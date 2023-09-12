import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    rowGap: 20,
  },
  image: {
    width: Dimensions.get("screen").width,
    aspectRatio: 1 / 1,
  },
  containerHomeText:{
    alignItems: "center"
  },
  textHome: {
    fontSize: 30,
    fontFamily: "TiliumBold",
    color: colors.moradoOscuro
  }
});

export default styles;
