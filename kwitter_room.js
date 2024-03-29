
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC8K-biavLiY71Jl_QClLCwyvrTqLcOr54",
      authDomain: "kwitter-8c7a4.firebaseapp.com",
      databaseURL: "https://kwitter-8c7a4-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c7a4",
      storageBucket: "kwitter-8c7a4.appspot.com",
      messagingSenderId: "20137934513",
      appId: "1:20137934513:web:3dfe554e5bb90f91622c90"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="WELCOME "+user_name + "!";
    function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name "
    });
   localStorage.setItem("room_name", room_name);
   window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname-" + Room_names);
      row="<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location="index.html";
}