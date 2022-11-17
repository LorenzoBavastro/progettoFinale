import {User} from './User.js';

let signInButton = document.getElementById("signInButton");
let signInButton1 = document.getElementById("save");
let displayName = document.getElementById("displayName");
let cell8 = document.getElementById("8");
let cell9 = document.getElementById("9");
let cell10 = document.getElementById("10");
let cell11 = document.getElementById("11");
let cell12 = document.getElementById("12");
let cell13 = document.getElementById("13");
let cell14 = document.getElementById("14");
let cell15 = document.getElementById("15");

let userlist = [];


signInButton.addEventListener("click", signed, true); 
signInButton1.addEventListener("click",  save, {once:true});

function signed()
{
    
    displayName.textContent = " "+ document.getElementById("name").value ;
    displaySurname.textContent = " "+ document.getElementById("surname").value ;
    displayCF.textContent = " "+ document.getElementById("CF").value ;
    displayDateOfBirth.textContent = " "+ document.getElementById("dateOfBirth").value ;
    displayAddress.textContent = " "+ document.getElementById("address").value ;    
    displayEmail.textContent = " "+ document.getElementById("email").value ;
    displayNumber.textContent = " "+ document.getElementById("number").value ;
    displayOccupation.textContent = " "+ document.getElementById("occupation").value ;
   
}

function save(){
    cell8.textContent = " " + document.getElementById("name").value ;
    cell9.textContent = " " + document.getElementById("surname").value ;
    cell10.textContent = " "+ document.getElementById("CF").value ;
    cell11.textContent = " "+ document.getElementById("dateOfBirth").value ;
    cell12.textContent = " " + document.getElementById("address").value ;    
    cell13.textContent =  " "+ document.getElementById("email").value ;
    cell14.textContent = " "+ document.getElementById("number").value ;
    cell15.textContent = " "+ document.getElementById("occupation").value ;
}


function insertInUsers()
{
    let user1 = new User (
        document.getElementById("name").value ,
        document.getElementById("surname").value ,
        document.getElementById("CF").value ,
        document.getElementById("dateOfBirth").value ,
        document.getElementById("address").value ,
        document.getElementById("email").value ,
        document.getElementById("number").value ,
        document.getElementById("occupation").value ,
        )
        userlist[0] = user1;
}