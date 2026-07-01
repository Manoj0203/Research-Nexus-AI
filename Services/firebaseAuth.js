// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFNlxehHEUJKYqKzQnBTRtB4sD3siY4xA",
  authDomain: "research-nexus-ai.firebaseapp.com",
  projectId: "research-nexus-ai",
  storageBucket: "research-nexus-ai.firebasestorage.app",
  messagingSenderId: "961199237843",
  appId: "1:961199237843:web:bdff6f1b2561bcd7024226"
};

// Initialize Firebase
let auth;
let app;
if(getApps().length == 0)
{
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })    
}
else
{
    auth = getAuth();
}

// Correctly exports the initialized Auth object for direct use in components:
export default auth; 
export const db = getFirestore(app)
export const storage = getStorage(app);