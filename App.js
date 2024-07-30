// import 'react-native-gesture-handler';
// import { enableScreens } from 'react-native-screens';
// enableScreens();
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './components/HomeScreen';
// import WebviewWithHomeScreenNavigation from './components/WebviewWithHomeScreenNavigation';
import WebviewWithToastMessage from './components/WebviewWithToastMessage';


// const Stack = createStackNavigator();

const App = () => {
  return (
    <WebviewWithToastMessage />
    ///////////////////////////////////////////////////////////////////////////
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Webview" component={WebviewWithHomeScreenNavigation} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default App;