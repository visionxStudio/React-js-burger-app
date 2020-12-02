import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBa7-jsXWStZGXXJ_OSzbWjuC8j_tg58T0",
    authDomain: "techsansaar-bd473.firebaseapp.com",
    databaseURL: "https://techsansaar-bd473.firebaseio.com",
    projectId: "techsansaar-bd473",
    storageBucket: "techsansaar-bd473.appspot.com",
    messagingSenderId: "701137678396",
    appId: "1:701137678396:web:7ee32dd75a31ce4f98d339",
    measurementId: "G-D64DHJ0Z0M"
  };

  const fire = firebase.initializeApp(config);

  export default fire;