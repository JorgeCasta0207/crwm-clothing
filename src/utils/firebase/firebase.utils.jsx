// Import necessary functions and objects from Firebase and Firestore libraries
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration object containing project-specific settings
const firebaseConfig = {
  apiKey: "AIzaSyDOYpbB2vvZcpwyn7OVL2uf4BRJjq3hrPg",
  authDomain: "crwn-clothing-db-d4eb9.firebaseapp.com",
  projectId: "crwn-clothing-db-d4eb9",
  storageBucket: "crwn-clothing-db-d4eb9.appspot.com",
  messagingSenderId: "28854744568",
  appId: "1:28854744568:web:ec7d938741ab09ece4920d"
};

// Initialize the Firebase app with the provided configuration
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the GoogleAuthProvider class for authentication
const provider = new GoogleAuthProvider();

// Set custom parameters on the provider to prompt user account selection
provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize the authentication object
export const auth = getAuth();

// Function to initiate sign-in process using Google account
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize the Firestore database object
export const db = getFirestore();

// Function to create a user document in the Firestore database
export const createUserDocumentFromAuth = async (userAuth) => {
  // Create a reference to the user document using the user ID
  const userDocRef = doc(db, 'users', userAuth.uid);

  // Retrieve the user document snapshot
  const userSnapshot = await getDoc(userDocRef);

  // Check if the user document doesn't exist
  if (!userSnapshot.exists()) {
    // Extract user details from userAuth object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create the user document in the Firestore database
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      // Log an error message if there's an error creating the user document
      console.log('Error creating the user', error.message);
    }
  }

  // Return the user document reference
  return userDocRef;
};
