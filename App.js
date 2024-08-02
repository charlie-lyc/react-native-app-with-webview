import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './components/HomeScreen';
// import WebviewWithNavigation from './components/WebviewWithNavigation';
// import WebviewWithToastMessage from './components/WebviewWithToastMessage';
import WebviewPlus from './components/WebviewPlus'


const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={WebviewPlus} options={{ headerShown: false }}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </SafeAreaProvider>
    ///////////////////////////////////////////////////////////////////////////////////////////
    // <WebviewWithToastMessage />
    ///////////////////////////////////////////////////////////////////////////////////////////
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Webview" component={WebviewWithNavigation} />
    //     </Stack.Navigator> 
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default App;