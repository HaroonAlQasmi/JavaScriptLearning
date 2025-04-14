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