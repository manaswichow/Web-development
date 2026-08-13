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