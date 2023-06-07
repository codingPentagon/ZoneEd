importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDNYmNI8dvHyNRpcp2JNSRdYCrUSz2vEyI",
  authDomain: "zoneed-a61da.firebaseapp.com",
  projectId: "zoneed-a61da",
  storageBucket: "zoneed-a61da.appspot.com",
  messagingSenderId: "896598316718",
  appId: "1:896598316718:web:274c66582a3baa5aeabf3f"
});

const messaging = firebase.messaging();
