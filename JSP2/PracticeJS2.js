function arrayReverser() {
    let userInput = prompt("Enter an Array seperate objects by ',':");
    let userArray = userInput.split(",");
    let reversedArray = [];
    for (let i = 1; i <= userArray.length; i++) {
        reversedArray.push(userArray.at(-i));
    }
    alert("The Array in reverse is "+ reversedArray)
}
function positiveFilter() {
    let userInput = prompt("Enter numbers to filter out the negatives, Seperate them by ',':");
    let userArray = userInput.split(",").map(Number);
    let positiveArray = [];
    for(let i = 0; i < userArray.length; i++){
        if (userArray[i] > 0){
            positiveArray.push(userArray[i]);
        }
    }
    alert("The positive numbers are: " + positiveArray);
}
function arraySum() {
    let userInput = prompt("Enter numbers and seperate them using ',':");
    let userArray = userInput.split(",").map(Number);
    let sum = 0;
    for(let i = 0; i < userArray.length;i++){
        sum += userArray[i];
    }
    alert("The sum of the array is: "+sum);
}
