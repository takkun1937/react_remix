import admin from 'firebase-admin';

const serviceAccount = import.meta.env.VITE_FIREBASE_PRIVATE_KEY_PATH;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export {admin};
