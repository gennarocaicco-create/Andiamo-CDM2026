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

// IMPORTANT : on n'affiche une notification manuellement QUE si le payload
// ne contient PAS de bloc "notification" (sinon le navigateur l'affiche déjà
// automatiquement → doublon)
messaging.onBackgroundMessage(payload => {
  if (payload.notification) {
    // Le navigateur affiche déjà cette notification automatiquement.
    // Ne rien faire pour éviter le doublon.
    return;
  }
  // Message "data-only" → on doit l'afficher nous-mêmes
  const data = payload.data || {};
  self.registration.showNotification('🏆 Andiamo CDM 2026', {
    body: data.msg || '',
    vibrate: [200, 100, 200],
    tag: 'andiamo-notif'
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://gennarocaicco-create.github.io/Andiamo-CDM2026/')
  );
});
