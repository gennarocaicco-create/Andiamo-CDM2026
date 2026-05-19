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

messaging.onBackgroundMessage(payload => {
  const n = payload.notification || {};
  const data = payload.data || {};
  const title = n.title || '🏆 Andiamo CDM 2026';
  const body = n.body || data.msg || '';
  self.registration.showNotification(title, {
    body: body,
    vibrate: [200, 100, 200],
    tag: 'andiamo-notif',
    requireInteraction: false
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://gennarocaicco-create.github.io/Andiamo-CDM2026/')
  );
});
