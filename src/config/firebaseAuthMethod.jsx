import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getUserData, sendUserData } from "./firebaseDatabaseMethod";

const signUPFun = (data) => {
  console.log(data);
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      sendUserData(data, `${user.uid}/`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      switch (errorCode) {
        case "auth/email-already-in-use":
          //   setErrMsg("Email already in use");
          break;
        case "auth/weak-password":
          //   setErrMsg("Password should be at least 6 characters");
          break;
        default:
          //   setErrMsg("Error:", errorMessage);
          break;
      }
      // ..
    });
};

const logInFun = (data) => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      switch (errorCode) {
        case "auth/user-not-found":
          // setErrMsg("User not found");
          break;
        case "auth/wrong-password":
          // setErrMsg("Incorrect password");
          break;
        default:
          // setErrMsg("Error:", errorMessage);
          break;
      }
    });
};

const checkUserAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // console.log(uid);
      getUserData(uid);
    } else {
      alert("You are logged out.");
      // User is signed out
      // ...
    }
  });
};

export { signUPFun, logInFun, checkUserAuth };
