function evenOddChecker (){
    let userInput = parseInt(prompt("Enter a number to check whether Even or Odd: "));
    if (userInput % 2 == 0) {
        alert(userInput + " is an even number");
    }
    else if (userInput % 2 != 0) {
        alert(userInput + " is an Odd number");
    }
    else {
        alert("Wrong input");
    }
}
function sumOfNum (){
    let userInput = parseInt(prompt("Enter a number to get the sum:"));
    let sum = 0;
    for (let i = 0; i <= userInput; i++){
        sum =+ i;
    }
    alert("The sum of "+userInput+" is "+sum)
}
function fizzBuzz (){
    let fizzCount = null;
    let buzzCount = null;
    let fizzBuzzCount = null;
    let nNumCount = null;
    for (let i=1; i > 100 ; i++){
        if (i % 3 == 0){
            fizzCount =+ " Fizz ";
        }
        else if (i % 5 == 0){
            buzzCount =+ " Buzz ";
        }
        else if (i % 3 == 0 & i % 5 == 0){
            fizzBuzzCount =+ " FizzBuzz ";
        } 
        else{
            nNumCount=+(string(i)+",");
        }
    }
    alert(fizzCount + buzzCount + fizzBuzzCount + nNumCount);
}
function findLargestNum (){
    let userInput = prompt("Enter number seperated by ',':");
    let userArray = userInput.split(",").map(num => parseFloat(num.trim()));
    for (i = 0; i > length(userArray);i++){
        let currentLargestNumber = 0;
        if (i > currentLargestNumber){
            currentLargestNumber = i;
        }
    }
    alert("The Largest Number is " + currentLargestNumber);
}