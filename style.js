import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginTop: 50,
    marginLeft: 20,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    paddingLeft: 30,
    fontSize: 20,
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
  headerImg: {
    width: 80,
    height: 90,
    alignSelf: "center",
    marginTop: 20,
  },

  header: {
    backgroundColor: "#023047",
    padding: 50,
    flexDirection: "row",
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  body: {
    backgroundColor: "#e0e1dd",
    padding: 50,
    flexDirection: "row",
    flex: 10,
  },
  footer: {
    backgroundColor: "#023047",
    padding: 20,
    flexDirection: "row",
    height: 70,
  },
  addTaskButton: {
    backgroundColor: "#023047",
    paddingVertical: 15,
    paddingHorizontal: 170,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 15, // Adds spacing above the footer
    shadowColor: "#000",
  },
  addTaskContainer: {
    backgroundColor: "#e0e1dd",
    paddingVertical: 2,
    alignItems: "center", // Centers button horizontally
  },

  addTaskButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  //task card
  taskCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  taskText: {
    fontSize: 16,
    color: "#333",
  },
});
