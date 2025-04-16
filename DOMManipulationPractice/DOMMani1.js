function changeHeading(){
    document.getElementById("Myh1").innerText = "This Has been Changed!";
}
function changeDivBC(){
    document.getElementsByTagName("div")[0].style.backgroundColor = "gold";
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
function addIntoULList(){
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.innerText = "A list item";
    ul.appendChild(li);
}
function removeElement(){
    let userInput = prompt("Enter Tag name to be removed like ('ul','p','div','h1'):");
    let elements = document.getElementsByTagName(userInput);
    if (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    } else {
        alert("Element Not found!");
    }
}