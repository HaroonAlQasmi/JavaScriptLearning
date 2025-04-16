function changeTitle(){
    document.getElementsByTagName("title")[0].innerText = "A page abut lions";
}
function changeAlt(){
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("alt","there was supposed to be a lion looking man here");
}
function changeMe(){
    document.getElementById("chB").innerText = "Clicked!";
}
function pResize(){
    let myP = document.getElementsByTagName("p")[0];
    if (myP.style.fontSize === "14px") {
        myP.style.fontSize = "24px"; 
    } else if (myP.style.fontSize === "24px") {
        myP.style.fontSize = "14px";
    }
}
let clickCount = 0;
function clickCounter(){
    clickCount += 1;
    document.getElementById("LLV").innerText = "You love lions this much: "+clickCount;
}
function disableButton(){
    document.getElementById("DB").disabled = true;
    document.getElementById("DB").innerText = "IamDead";
}
function inputBorderColor(){
    let myInput = document.getElementsByTagName("input")[0];
    myInput.style.borderColor = "gold";
}
function displayText(){
    let LVtext = document.getElementById("LVtext").value;
    alert("The lions appriciate these words: " + LVtext);
}
function backgroundColorChanger() {
    let body = document.body;
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "green"; // Change background to green
    } else if (body.style.backgroundColor === "green") {
        body.style.backgroundColor = "white"; // Change background to white
    } else {
        body.style.backgroundColor = "white"; // Default to white if no color is set
    }
}
function ilCC(id){
    let ilC = document.getElementById(id);
    ilC.style.backgroundColor = "brown";
}
function clickBoxShow(){
    let inputType = document.getElementById("secret");
    if(inputType.type === "password"){
        inputType.type = "text";
    }
    else if(inputType.type === "text"){
        inputType.type = "password";
    }
}
function scream(){
    let textToScream = document.getElementById("scream").value;
    document.getElementById("screamed").innerText = textToScream.toUpperCase();
}
