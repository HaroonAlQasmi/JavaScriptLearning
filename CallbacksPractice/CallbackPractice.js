function greet(name,callback){
    console.log(`Hello, ${name}!`);
    callback();
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