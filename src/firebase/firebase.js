import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvmBBy9mzQzTVujAuHdhi1XSYyA-F7aL8",
  authDomain: "expensify-9732d.firebaseapp.com",
  databaseURL: "https://expensify-9732d-default-rtdb.firebaseio.com",
  projectId: "expensify-9732d",
  storageBucket: "expensify-9732d.appspot.com",
  messagingSenderId: "795159910579",
  appId: "1:795159910579:web:e3f59a1642c2bf49e078c6",
  measurementId: "G-0GZBYQH8B2",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Giedre",
    age: 31,
    stressLevel: 6,
    job: {
      title: "Software developer",
      company: "Google",
    },
    location: {
      city: "Vilnius",
      country: "Lithuania",
    },
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch((error) => {
    console.log("This failed.", error);
  });

database.ref().update({
  stressLevel: 9,
  "job/company": "IBM",
  "location/city": "Vilnius/remote",
});

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((error) => {
//     console.log("Remove failed: ", error);
//   });
