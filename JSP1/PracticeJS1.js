function evenOddChecker (){
    let userInput = prompt("Enter a number to check whether Even or Odd: ");
    if  (isNaN(userInput)) {
        alert("Wrong input");
    }
    else if (parseInt(userInput) % 2 != 0) {
        alert(userInput + " is an Odd number");
    }
    else if  (parseInt(userInput) % 2 == 0){
        alert(userInput + " is an even number");
    }
}
function sumOfNum (){
    let userInput = parseInt(prompt("Enter a number to get the sum:"));
    let sum = 0;
    for (let i = 0; i <= userInput; i++){
        sum += i;
    }
    alert("The sum of "+userInput+" is "+sum)
}
function fizzBuzz (){
    let fizzCount = "";
    let buzzCount = "";
    let fizzBuzzCount = "";
    let nNumCount = "";
    for (let i=1; i <= 100 ; i++){
        if (i % 3 == 0 && i % 5 == 0){
            fizzCount += " Fizz ";
        }
        else if (i % 5 == 0){
            buzzCount += " Buzz ";
        }
        else if (i % 3 == 0){
            fizzBuzzCount += " FizzBuzz ";
        } 
        else{
            nNumCount+= i.toString() + ",";
        }
    }
    alert(fizzCount + buzzCount + fizzBuzzCount + nNumCount);
}
function findLargestNum (){
    let userInput = prompt("Enter numbers seperated by ',':");
    let userArray = userInput.split(",").map(num => parseFloat(num.trim()));
    let currentLargestNumber = 0;
    for (let i = 0; i < userArray.length;i++){
        if (userArray[i] > currentLargestNumber){
            currentLargestNumber = userArray[i];
        }
    }
    alert("The Largest Number is " + currentLargestNumber);
}
function vowelCounter(){
    let userInput = prompt("Enter a string to check for vowels: ");
    let vowelCount = 0; 
    for (let i = 0; i < userInput.length; i++){ 
        if (["a", "e", "i", "o", "u"].includes(userInput[i].toLowerCase())){
            vowelCount += 1;
        }
    }
    alert("The vowel count is "+ vowelCount);
}