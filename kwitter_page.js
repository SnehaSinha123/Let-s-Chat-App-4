//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCGVgGwDq5LbWazkisnwZLgkTJTgjLVbuc",
    authDomain: "kwitter-2f500.firebaseapp.com",
    databaseURL: "https://kwitter-2f500-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f500",
    storageBucket: "kwitter-2f500.appspot.com",
    messagingSenderId: "427745227117",
    appId: "1:427745227117:web:b443b1cac840c1ffd0aa64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");


  function send(){
     msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});

//End code
    } });  }); }
getData();
