import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ImageGenerationScreen from "./src/screens/ImageGenerationScreen";
import ImageModal from "./src/screens/ImageViewer";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ImageGenerate" component={ImageGenerationScreen} />
        <Stack.Screen name="ImageModal" component={ImageModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
