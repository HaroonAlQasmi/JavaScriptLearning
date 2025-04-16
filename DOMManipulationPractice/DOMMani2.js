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