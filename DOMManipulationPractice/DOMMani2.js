function changeTitle(){
    document.getElementsByTagName("title")[0].innerText = "A page abut lions";
}
function changeAlt(){
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("alt","there was supposed to be a lion looking man here");
}
function changeMe(){
    document.getElementById("chB").innerText = "I am a changed button";
}