import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { s } from "./style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
          <Text>Body</Text>
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
