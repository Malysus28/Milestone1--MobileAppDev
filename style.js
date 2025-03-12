import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  headerText: {
    color: "white",
    textAlign: "right",
    marginTop: 5,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },

  headerImg: {
    width: 60,
    height: 60,
    alignSelf: "right",
    marginLeft: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  header: {
    backgroundColor: "#d62828",
    padding: 5,
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    justifyContent: "right",
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 4,
  },
  body: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
    flex: 10,
  },
  footer: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    flexDirection: "row",
    height: 70,
  },
  addTaskButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 15,
    shadowColor: "#000",
  },
  addTaskContainer: {
    backgroundColor: "white",
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
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    justifyContent: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  taskText: {
    fontSize: 16,
    color: "black",
    //flexShrink: 1,
    width: "80%",
  },

  checkImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
