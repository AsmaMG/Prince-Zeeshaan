import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "super secret keys.....asgvegxgevergfvr",
    authDomain: "tallans-imageupload-tutorial.firebaseapp.com",
    databaseURL: "https://tallans-imageupload-tutorial.firebaseio.com",
    projectId: "tallans-imageupload-tutorial",
    storageBucket: "tallans-imageupload-tutorial.appspot.com",
    messagingSenderId: "super secret keys.....asgvegxgevergfvr",
    appId: "super secret app id....adsfa;lsdkjf",
    measurementId: "super secret as;dlkfjal;dskjf"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();


  const provider=new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  const storage = firebase.storage()


//analytics is optional for this tutoral 
//   firebase.analytics();


  export  {
    storage, firebase as default
  }
 