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