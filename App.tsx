/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider } from "@gorhom/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useFonts } from 'expo-font';

function App(): JSX.Element {
  // const [fontsLoaded] = useFonts({
    // 'Rubik-Regular': require('./assets/fonts/rubik/Rubik-Black'),
    // 'Rubik-Bold': require('./assets/fonts/rubik/Rubik-Bold'),
    // Add more fonts as needed
  // });
  
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
