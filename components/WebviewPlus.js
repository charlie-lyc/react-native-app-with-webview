import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, BackHandler, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from '@react-navigation/elements';
import ExitApp from 'react-native-exit-app';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Webview = ({ navigation }) => {
  const ref = useRef(null);
  const [navState, setNavState] = useState({ canGoBack: false });

  let isExitApp = false;
  let timeout;

  useEffect(() => {
    const canGoBack = navState.canGoBack;

    const onPress = () => {
      if (canGoBack) {
        ref.current.goBack();
        // return true;
      } else {
        if (!isExitApp) {
          isExitApp = true;
          ToastAndroid.show("'뒤로' 한번 더 누르면 앱이 종료됩니다.", ToastAndroid.SHORT);
          timeout = setTimeout(() => isExitApp = false, 2000);
        } else {
            clearTimeout(timeout);
            // 앱 강제 종료
            ExitApp.exitApp();
        }
        // return false;
      }
      return true;
    };

    navigation.setOptions({
      headerLeft: () =>
        canGoBack ? <HeaderBackButton onPress={onPress} /> : null,
    });

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onPress);

    // clean up
    return () => {
      backHandler.remove();
    };
  }, [navState.canGoBack]);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={ref}
        style={styles.webview}
        source={{ uri: 'https://naver.com' }}
        onNavigationStateChange={e => setNavState(e)}
        startInLoadingState={true}
        renderError={(errorName) => (
          <SafeAreaView style={styles.errorContainer}>
            <Text>Error: {errorName}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Webview;