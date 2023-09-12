import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.AzulRey,
    paddingVertical: 10,
  },
  buttonMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textMenu: {
    paddingHorizontal: 10,
    color: colors.white,
    fontFamily: "TiliumLight",
    fontWeight: "300"
  },
  textMenuFocused: {
    color: colors.white,
  },
});

export default styles;
