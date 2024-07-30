import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from '@react-navigation/elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Webview = ({ navigation }) => {
  const ref = useRef(null);
  const [navState, setNavState] = useState({ canGoBack: false });

  useEffect(() => {
    const canGoBack = navState.canGoBack;

    const onPress = () => {
      if (canGoBack) {
        ref.current.goBack();
        return true;
      } else {
        return false;
      }
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