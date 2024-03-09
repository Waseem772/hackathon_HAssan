import { child, get, ref, set } from "firebase/database";
import { database } from "./firebaseConfig";
// import { useSelector } from "react-redux";

function sendUserData(data, path) {
  set(ref(database, "users/" + path), {
    ...data,
  });
}


function getUserData(path) {
  //   const state = useSelector((state) => state);
  get(child(ref(database), `users/${path}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        getUserData(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export { sendUserData, getUserData };
