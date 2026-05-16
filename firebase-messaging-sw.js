importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCM1r38ceXGQz7az9CRhHRZyvTrdhkTVIQ",
  authDomain: "andiamocdm26.firebaseapp.com",
  databaseURL: "https://andiamocdm26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "andiamocdm26",
  storageBucket: "andiamocdm26.firebasestorage.app",
  messagingSenderId: "378710185221",
  appId: "1:378710185221:web:6a5601ffaaac04c6d2136c"
});

const messaging = firebase.messaging();

// Notification reçue en arrière-plan
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '🏆 Andiamo CDM 2026', {
    body: body || payload.data?.msg || '',
    icon: '/Andiamo-CDM2026/icon.svg',
    badge: '/Andiamo-CDM2026/icon.svg',
    vibrate: [200, 100, 200],
    data: payload.data,
  });
});
