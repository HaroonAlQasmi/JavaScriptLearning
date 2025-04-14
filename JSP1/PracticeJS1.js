function evenOddChecker (){
    userInput = parseInt(prompt("Enter a number to check whether Even or Odd: "))
    if (userInput % 2 == 0) {
        alert(userInput + " is an even number")
    }
    else if (userInput % 2 != 0) {
        alert(userInput + " is an Odd number")
    }
    else {
        alert("Wrong input")
    }
}
function sumOfNum (){
    userInput = parseInt(prompt("Enter a number to get the sum:"))
    sum = 0
    for (let i = 0; i <= userInput; i++){
        sum =+ i
    }
    alert("The sum of "+userInput+" is "+sum)
}