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

database.ref().set({
  name: "Giedre",
  age: 31,
  location: {
    city: "Vilnius",
    country: "Lithuania",
  },
});

//database.ref().set("This is my data.");

database.ref("age").set(33);
database.ref("location/city").set("Juodkrante");
database.ref("attributes").set({
  height: 164,
  weight: 60,
});
database.ref("books").set({
  favorite: 2,
  forWork: 100,
});
database.ref("books/favorite").set("about node.js");
