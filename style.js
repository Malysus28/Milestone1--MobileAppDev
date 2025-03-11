import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  headerText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    paddingLeft: 30,
    fontSize: 20,
  },

  headerImg: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginTop: 20,
  },

  header: {
    backgroundColor: "#1E1E1E",
    padding: 40,
    flexDirection: "row",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  body: {
    backgroundColor: "#343434",
    padding: 15,
    flexDirection: "row",
    flex: 10,
  },
  footer: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    flexDirection: "row",
    height: 70,
  },
  addTaskButton: {
    backgroundColor: "#8DB600",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 15,
    shadowColor: "#000",
  },
  addTaskContainer: {
    backgroundColor: "#343434",
    paddingVertical: 2,
    alignItems: "center",
  },

  addTaskButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  //task card
  taskCard: {
    backgroundColor: "#555555",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  taskText: {
    fontSize: 16,
    color: "white",
    fontSize: 18,
  },
  taskButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  taskDoneButton: {
    backgroundColor: "#8DB600",
    padding: 3,
    borderRadius: 8,
    marginTop: 10,
    width: 60,
    alignSelf: "flex-end",
    justifyContent: "row",
  },
  checkImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
