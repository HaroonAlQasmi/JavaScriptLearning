function arrayReverser (){
    let userInput = prompt("Enter an Array seperate objects by ',':");
    let userArray = userInput.split(",");
    let reversedArray = [];
    for (let i = 1; i <= userArray.length; i++) {
        reversedArray.push(userArray.at(-i));
    }
    alert("The Array in reverse is "+ reversedArray)
}