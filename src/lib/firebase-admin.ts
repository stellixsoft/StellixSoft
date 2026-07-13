import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

function getPrivateKey() {
  const key = process.env.FIREBASE_PRIVATE_KEY;
  if (!key) return undefined;
  return key.replace(/\\n/g, "\n");
}

function createFirebaseApp(): App {
  const existing = getApps()[0];
  if (existing) return existing;

  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = getPrivateKey();

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.",
    );
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    projectId,
  });
}

const globalForFirebase = globalThis as unknown as {
  firebaseApp?: App;
  firestore?: Firestore;
};

export function getFirebaseApp(): App {
  if (!globalForFirebase.firebaseApp) {
    globalForFirebase.firebaseApp = createFirebaseApp();
  }
  return globalForFirebase.firebaseApp;
}

export function getDb(): Firestore {
  if (!globalForFirebase.firestore) {
    globalForFirebase.firestore = getFirestore(getFirebaseApp());
  }
  return globalForFirebase.firestore;
}

export const BLOG_POSTS_COLLECTION = "blogPosts";
