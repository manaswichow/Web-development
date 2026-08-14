// alert("Welcome to bootcamp");
var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]

var cur=0;
function toggleuser(){
    cur=(cur+1)%2;

    var username=document.getElementById("user-name");
    var usergender=document.getElementById("user-gender");
    var userimg=document.getElementById("user-img");

    username.innerHTML=users[cur].name;
    usergender.innerHTML=users[cur].gender;
    userimg.src=users[cur].image;    
}

function randomuser(){
    fetch("https://randomuser.me/api")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
 var username=document.getElementById("user-name");
    var usergender=document.getElementById("user-gender");
    var userimg=document.getElementById("user-img");

    var newusername=data.results[0].name.first+""+data.results[0].name.last;
    var newusergender=data.results[0].gender;
    var newuserimg=data.results[0].picture.large;

    username.innerHTML=newusername;
    usergender.innerHTML=newusergender;
    userimg.src=newuserimg
    })
    .catch(function(err){
        console.log("Error occured: "+err);
    })
}