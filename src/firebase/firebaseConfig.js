import { initializeApp } from "firebase/app";


const firebaseConfig = {
  
  apiKey: "AIzaSyCKZl__Cv5iRybo5ATPKIg8ODHm0m3cd00",

  authDomain: "herrajes-arroyo.firebaseapp.com",

  databaseURL: "https://herrajes-arroyo-default-rtdb.firebaseio.com",

  projectId: "herrajes-arroyo",

  storageBucket: "herrajes-arroyo.appspot.com",

  messagingSenderId: "439401360684",

  appId: "1:439401360684:web:b7b74768ebf29a44315089",

  measurementId: "G-7BNZVX486P"

};

initializeApp(firebaseConfig,{
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});

