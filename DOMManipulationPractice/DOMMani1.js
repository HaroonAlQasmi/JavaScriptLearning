function changeHeading(){
    document.getElementById("Myh1").innerText = "This Has been Changed!";
}
function changeDivBC(){
    document.getElementsByTagName("div")[0].style.backgroundColor = "blue";
}
function hideShow(){
    let element = document.getElementsByTagName("p")[0]
    if (getComputedStyle(element).visibility == "visible"){
        element.style.visibility = "hidden";
    }
    else if(getComputedStyle(element).visibility == "hidden"){
        element.style.visibility = "visible";
    }
}