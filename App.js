import React, { useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";

// Hardcoded To-Do list tasks for now
const initialTasks = [
  { id: 1, task: "Get Groceries", completed: false },
  {
    id: 2,
    task: "Finish Mobile App Dev Project milestone 1",
    completed: false,
  },
  { id: 3, task: "Go to Gym", completed: false },
  {
    id: 4,
    task: "Mobile App Dev Project milestone 2",
    completed: false,
  },
  { id: 5, task: "Keep Track of WIL project", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Function to toggle task completion
  const markTaskAsDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
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
                {/* Task row containing checkmark and text */}
                <View style={s.taskRow}>
                  {item.completed && ( // Only show checkmark if task is completed
                    <Image
                      style={s.checkImg}
                      source={require("./assets/check.png")}
                    />
                  )}
                  <Text style={s.taskText}>{item.task}</Text>
                </View>

                {/* Button to mark task as done */}
                <TouchableOpacity
                  style={s.taskDoneButton}
                  onPress={() => markTaskAsDone(item.id)}
                >
                  <Text style={s.taskButtonText}>
                    {item.completed ? "Undo" : "Done"}
                  </Text>
                </TouchableOpacity>
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

        {/* Footer */}
        {/*<View style={s.footer}>
          <Text>Footer</Text>
        </View>*/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
