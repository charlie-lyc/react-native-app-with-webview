import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, BackHandler, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
// import { HeaderBackButton } from '@react-navigation/elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Webview = () => {
  let isExitApp = false;
  let timeout;

  useEffect(() => {
    // 안드로이드 기기의 뒤로가기 버튼을 토스트 메시지를 이용하여 처리
    const backAction = () => {
        if (!isExitApp) {
            isExitApp = true;
            ToastAndroid.show("'뒤로' 버튼을 한번 더 누르면 종료됩니다.", ToastAndroid.SHORT);
            timeout = setTimeout(() => isExitApp = false, 2000);
        } else {
            clearTimeout(timeout);
            // 앱 종료
            BackHandler.exitApp();
        }
        return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: 'https://naver.com' }}
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