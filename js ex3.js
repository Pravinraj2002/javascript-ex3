function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

checkAge(20);  
checkAge(16);  

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(10); 

function countdown(start) {
    while (start >= 1) {
        console.log(start);
        start--;
    }
}

countdown(10); 


function printOddNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            continue; 
        }
        console.log(i); 



function findFirstMultiple(n, multiple) {
    for (let num = 1; num <= n; num++) {
        if (num % multiple === 0) {
            return num;
            break; 
        }
    }
}

let n = 20;
let multiple = 5;
let result = findFirstMultiple(n, multiple);
console.log(result);

