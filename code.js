// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof input == 'undefined') {
        return "Hello, World!";
    } if (input === true){
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    if (input === 5){
        return true;
    } else if (typeof input == "string"){
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else if (typeof input === "boolean") {
        return false;
    } else {
        return false;
    }
}