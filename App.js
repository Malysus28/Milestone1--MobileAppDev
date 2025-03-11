import { Text, View, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { s } from "./style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//Hardcoded To-Do list tasks for now
const tasks = [
  {
    id: 1,
    task: "Get Groceries",
    completed: false,
  },
  {
    id: 2,
    task: "Finish Mobile App Dev Project milestone 1 ",
    completed: false,
  },
  {
    id: 3,
    task: "Go to Gym ",
    completed: false,
  },
  {
    id: 4,
    task: "Start working on Mobile App Dev Project milestone 2",
    completed: false,
  },
  {
    id: 5,
    task: "Keep Track of WIL project ",
    completed: false,
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        //make a splash screen and save it in assets with splash.png //Header
        <View style={s.header}>
          <Image
            style={s.headerImg}
            source={require("./assets/to-do-list.png")}
          ></Image>
          <Text style={s.headerText}>My ToDo List</Text>
        </View>
        //Body
        <View style={s.body}>
          <FlatList
            data={tasks} // Correct variable name
            keyExtractor={(item) => item.id} // Ensure IDs are strings
            renderItem={({ item }) => (
              <View style={s.taskCard}>
                <Text style={s.taskText}>{item.task}</Text>
              </View>
            )}
          />
        </View>
        //Add Task Button
        <View style={s.addTaskContainer}>
          <TouchableOpacity
            style={s.addTaskButton}
            onPress={() => alert("Add Task Clicked")}
          >
            <Text style={s.addTaskButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
        //Footer
        <View style={s.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
