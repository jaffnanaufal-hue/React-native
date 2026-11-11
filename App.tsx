import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header Aplikasi */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Portal Kampus - Fabric WebView</Text>
      </View>

      {/* Komponen WebView Fabric */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: 'https://example.com' }}
          style={styles.flexOne}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    height: 55,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  webViewContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  flexOne: { flex: 1 },
});
