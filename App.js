import { Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile";
import { TouchableOpacity } from "react-native";
import { s } from "./style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={s.container}>
          <Text>Hello</Text>
          <Text>Lets make a ToDo list to keep track.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
