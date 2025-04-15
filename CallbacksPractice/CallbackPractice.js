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