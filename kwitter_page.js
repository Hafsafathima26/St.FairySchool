// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDF5nMuiL1bHgPTzdg-xIIxBNtIiwZfpjU",
      authDomain: "kwitter-new-3b700.firebaseapp.com",
      databaseURL: "https://kwitter-new-3b700-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-3b700",
      storageBucket: "kwitter-new-3b700.appspot.com",
      messagingSenderId: "833600691995",
      appId: "1:833600691995:web:11c3fad30e220015683dbe"
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
      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data["name"];
var message=message_data["message"];
var like=message_data["like"];
var name_with_tag="<h4>" +name+ "<img class='user_tick' src='tick.png'> </h4>";
var message_with_tag="<h4 class='message_h4'>"  +message+ "</h4>";
//like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function updateLike(message_id){
      console.log("clicked on the like button-"+message_id);
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updatedLikes=Number(like)+1;
      console.log(updatedLikes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}