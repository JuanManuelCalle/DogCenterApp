import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.moradoOscuro,
    borderRadius: 10,
    padding: 10,
    height: 40,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "TiliumLight"
  },
});

export default styles;
