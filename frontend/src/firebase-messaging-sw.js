import * as firebase from "@angular/fire/app";

importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging-compat.js');

const fire=firebase.initializeApp({
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = fire.messaging();
