import React from 'react';
// import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

// const screen = Dimensions.get("screen").width;

function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return (
    <WebView 
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${githubUsername}`}}
    />
  )
}

export default Profile;