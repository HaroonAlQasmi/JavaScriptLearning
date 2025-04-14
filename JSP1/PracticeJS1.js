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
function fizzBuzz (){
    fizzCount = null
    buzzCount = null
    fizzBuzzCount = null
    nNumCount = null
    for (let i=1; i > 100 ; i++){
        if (i % 3 == 0){
            fizzCount =+ " Fizz "
        }
        else if (i % 5 == 0){
            buzzCount =+ " Buzz "
        }
        else if (i % 3 == 0 & i % 5 == 0){
            fizzBuzzCount =+ " FizzBuzz "
        } 
        else{
            nNumCount=+(string(i)+",")
        }
    }
    alert(fizzCount + buzzCount + fizzBuzzCount + nNumCount)
}