/*create functions for add subtract multiply and divide 
These functions need to take two Items 
Num: 1 and Num: 2 */

function add (num1,num2) {
    return num1 + num2; 
};

function subtract (num1,num2) {
    return num1 - num2;
};

function multiply (num1,num2) {
    return num1 * num2;
};

function divide (num1,num2) {
    return num1 / num2;
};

/*Operate function takes a string ex. '3 + 5' turns it into an array ex.['3','+','5'] with three parts
Num1 an Operator and Num2. Depending the operator it runs a function to the coresponding
operator*/

function operator (string) {
    let arr = string.split(' ');

    if(arr[1] == '+') {
        return add(parseInt(arr[0]),parseInt(arr[2]))
    } else if(arr[1] == '-') {
        return subtract(parseInt(arr[0]),parseInt(arr[2]));
    } else if(arr[1] == '*') {
        return multiply(parseInt(arr[0]),parseInt(arr[2]));
    } else if(arr[1] == '/') {
        return divide(parseInt(arr[0]),parseInt(arr[2]));
    }

};