import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
    borderColor: colors.rosadoFuerte,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 20,
    flex: 10,
  },
  inputButton: {
    flex: 1,
  },
});

export default styles;
