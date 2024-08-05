/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';
import {AppRegistry, AppState, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-reanimated';

let isAppInForeground = true;
let soundInstance = null;

const playSound = () => {
  if (isAppInForeground) {
    soundInstance = new Sound('alaram.wav', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.error('Failed to load the sound', error);
      } else {
        soundInstance.play(success => {
          if (success) {
            // playSound(); // Play the sound again when it finishes only if the app is in the foreground
          } else {
            console.error('Failed to play the sound');
          }
        });
      }
    });
  } else {
    console.error('App is in the background, cannot play the sound');
  }
};

messaging().setBackgroundMessageHandler(async remoteMessage => {
  if (!isAppInForeground) {
    // console.log('Message handled in the background!', remoteMessage);
    Alert.alert(
      'New Message',
      `Title: ${remoteMessage.notification.title}\nMessage: ${remoteMessage.notification.body}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // console.log('OK Pressed');
            if (soundInstance) {
              soundInstance.stop(); // Stop the sound when the user presses OK
              soundInstance.release(); // Release the sound resources
            }
          },
        },
      ],
      {cancelable: false},
    );
    // Play the custom sound once when a message is received in the background
    console.log('msg', remoteMessage.notification.body);
    playSound();

    // Perform other background-related actions here
  }
});

messaging().onMessage(async remoteMessage => {
  console.log('Message handled in the foreground!', remoteMessage);

  // Play the custom sound once when a message is received in the foreground
  playSound();
  setTimeout(() => {
    soundInstance.stop(); // Stop the sound when the user presses OK
    // soundInstance.release(); // Release the sound resources
  }, 5000);

  Alert.alert(
    'New Message',
    `Title: ${remoteMessage.notification.title}\nMessage: ${remoteMessage.notification.body}`,
    [
      {
        text: 'OK',
        onPress: () => {
          // console.log('OK Pressed');
          if (soundInstance) {
            soundInstance.stop(); // Stop the sound when the user presses OK
            soundInstance.release(); // Release the sound resources
          }
        },
      },
    ],
    {cancelable: false},
  );
  console.log('msg2', remoteMessage.notification.body);
  // You can perform additional actions here based on the message data
});

AppState.addEventListener('change', newState => {
  if (newState === 'active') {
    isAppInForeground = true;
  } else if (newState === 'background') {
    isAppInForeground = false;
  }
});

AppRegistry.registerComponent(appName, () => App);
