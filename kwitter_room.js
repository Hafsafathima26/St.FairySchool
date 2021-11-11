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
   document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

   function add_room(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
