import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added - gets called for new ones and for existing ones
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref("expenses").on("value", (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });

// //     console.log(expenses);
// //   });

// database.ref("expenses").push({
//   description: "workation",
//   note: "",
//   amount: 10200,
//   createdAt: 2364234,
// });

// // database.ref("expenses/-Mfd3h_h3krWy26HtMVQ").update({
// //   description: "present",
// //   note: "",
// //   amount: 300,
// // });

// // database.ref("notes/-Mfd-Mff9X_2pdiO6wRG").remove();
// // database.ref("notes/-Mfd-Mff9X_2pdiO6wRG").update({
// //   body: "Ride a bike",
// // });

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "tdd, TypeScript, Node.js",
// // });

// // database.ref().on(
// //   "value",
// //   (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   },
// //   (error) => {
// //     console.log("Error with data fetching", error);
// //   }
// // );

// // database
// //   .ref()
// //   .once("value")
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {
// //     console.log("Error fetching data", error);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Giedre",
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software developer",
// //       company: "Google",
// //     },
// //     location: {
// //       city: "Vilnius",
// //       country: "Lithuania",
// //     },
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch((error) => {
// //     console.log("This failed.", error);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "IBM",
// //   "location/city": "Vilnius/remote",
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Remove succeeded.");
// //   })
// //   .catch((error) => {
// //     console.log("Remove failed: ", error);
// //   });
