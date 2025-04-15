function greet(name,callback){
    callback(name);
}
function greetName(name){
    console.log(`Hello, ${name}!`);
}
function calculate(a,operation,b){
    let answer = 0;
    switch (operation) {
        case 'add':
            answer = a + b;
            break;
        case 'subtract':
            answer = a - b;
            break;
        case 'multiply':
            answer = a * b;
            break;
        case 'division':
            answer = a / b;
            break;
    }
    console.log(answer);
}
function processArray(arr,callback){
    callback(arr);
}
function doublingNums(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}
function getData(callback){
    setTimeout(callback, 2000);
}
function dataFun(data){
    console.log("Received:",data);
}
function login(callback){
    console.log("Login Successful")
    setTimeout(callback, 2000);
}
function fetchUser(callback){
    console.log("User Name fetched")
    setTimeout(callback, 2000);
}
function fetchSettings(){
    console.log("Settings Fetched")
}
function divide(a,b,successCallback,errorCallBack){
    if (b == 0){
        errorCallBack()
    }
    else{
        successCallback(a,b)
    }
}
function errorDivision(){
    console.log("Wrong input")
}
function correctDivision(a,b){
    let divided = a / b;
    console.log("The answer is ", divided)
}