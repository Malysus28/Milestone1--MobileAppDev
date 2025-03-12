import React, { useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome"; // ✅ Import FontAwesome icons
import { s } from "./style";

// Hardcoded To-Do list tasks for now
const initialTasks = [
  { id: 1, task: "Get Groceries", completed: false },
  {
    id: 2,
    task: "Finish Mobile App Dev Project milestone 1, with the documentation",
    completed: false,
  },
  { id: 3, task: "Go to Gym", completed: false },
  { id: 4, task: "Mobile App Dev Project milestone 2", completed: false },
  { id: 5, task: "Keep Track of WIL project", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Function to toggle task completion
  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        {/* Header */}
        <View style={s.header}>
          <Image style={s.headerImg} source={require("./assets/to-do.png")} />
          <Text style={s.headerText}>My ToDo List</Text>
        </View>

        {/* Body */}
        <View style={s.body}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={s.taskCard}>
                {/* Task row containing text and checkbox icon */}
                <View style={s.taskRow}>
                  <Text style={s.taskText}>{item.task}</Text>

                  {/* Touchable Icon acting as a checkbox */}
                  <TouchableOpacity
                    onPress={() => toggleTask(item.id)}
                    style={{ marginLeft: 30 }}
                  >
                    <Icon
                      name={item.completed ? "check-square" : "square-o"}
                      size={24}
                      color={item.completed ? "#8DB600" : "red"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>

        {/* Add Task Button */}
        <View style={s.addTaskContainer}>
          <TouchableOpacity
            style={s.addTaskButton}
            onPress={() => alert("Add Task Clicked")}
          >
            <Text style={s.addTaskButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
