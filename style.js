import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "blue",
    marginTop: 50,
    marginLeft: 20,
  },

  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginTop: 50,
    marginLeft: 20,
  },
  innerText: {
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
});
