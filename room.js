
var firebaseConfig = {
    apiKey: "AIzaSyBOV3cg-9br-PdvhpGxZT3ITbB_uJrUFQc",
    authDomain: "world-chats-101b9.firebaseapp.com",
    databaseURL: "https://world-chats-101b9-default-rtdb.firebaseio.com",
    projectId: "world-chats-101b9",
    storageBucket: "world-chats-101b9.appspot.com",
    messagingSenderId: "761291126689",
    appId: "1:761291126689:web:6f9a374bbaa19a4970bde0",
    measurementId: "G-LL27GRKWSM"
  };
  
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
