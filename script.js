/*create functions for add subtract multiply and divide 
These functions need to take two Items 
Num: 1 and Num: 2 */

function add(num1, num2) {
    let result = num1 + num2;
    if (result.toString().length >= 8) {
        return result.toExponential();
    }
    return result.toString();
}

function subtract(num1, num2) {
    let result = num1 - num2;
    if (result.toString().length >= 8) {
        return result.toExponential();
    }
    return result.toString();
}

function multiply(num1, num2) {
    let result = num1 * num2;
    if (result.toString().length >= 8) {
        return result.toExponential();
    }
    return result.toString();
}

function divide(num1, num2) {
    let result = num1 / num2;
    if (result.toString().length >= 8) {
        return result.toExponential();
    }
    return result.toString();
}

function operator(string) {
    let arr = string.split(' ');

    if (arr[1] == '+') {
        return add(parseFloat(arr[0]), parseFloat(arr[2]));
    } else if (arr[1] == '-') {
        return subtract(parseFloat(arr[0]), parseFloat(arr[2]));
    } else if (arr[1] == '*') {
        return multiply(parseFloat(arr[0]), parseFloat(arr[2]));
    } else if (arr[1] == '/') {
        return divide(parseFloat(arr[0]), parseFloat(arr[2]));
    }
}

// Testing
console.log(operator('5 + 3')); // Output: 8
console.log(operator('12345678 * 2')); // Output: 2.4691356e+7


function isOneThroughNine () {

}


//add consts for all the buttons on all the buttons and display
const ac = document.querySelector('#AC');
const negative = document.querySelector('#neg');
const percent = document.querySelector('#percent');
const buttonEqual = document.querySelector('.buttonEqual');
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');
const buttonOp = document.querySelectorAll('.buttonOp');

ac.addEventListener('click', function () {
    display.textContent = ''
    currentStr = '';
});

negative.addEventListener('click', function () {
    if(display.textContent != '' && Math.sign(display.textContent) != -1) {
        display.textContent = '-' + display.textContent;
        if(currentStr.split(' ').length == 1) {
            let fuckWith = currentStr.split(' ');
            fuckWith[0] = display.textContent;
            currentStr = fuckWith.join(' ');
            console.log(currentStr);
        } else if(currentStr.split(' ').length == 3) {
                let fuckWith = currentStr.split(' ');
                fuckWith[2] = display.textContent;
                currentStr = fuckWith.join(' ');
                console.log(currentStr);
            }
     } else if(Math.sign(display.textContent) == -1) {
        display.textContent = display.textContent.slice(1);
        if(currentStr.split(' ').length == 1) {
            let fuckWith = currentStr.split(' ');
            fuckWith[0] = display.textContent;
            currentStr = fuckWith.join(' ');
            console.log(currentStr);
        } else if(currentStr.split(' ').length == 3) {
                let fuckWith = currentStr.split(' ');
                fuckWith[2] = display.textContent;
                currentStr = fuckWith.join(' ');
                console.log(currentStr);
            }
    }
})
let currentStr = ''; 

percent.addEventListener('click', function () {
    if(currentStr.split(' ').length == 1) {
        let fuckWith = currentStr.split(' ');
    display.textContent = (display.textContent / 100);
        fuckWith[0] = display.textContent;
        currentStr = fuckWith.join(' ');
        console.log(currentStr);
    } else if(currentStr.split(' ').length == 3) {
        let fuckWith = currentStr.split(' ');
    display.textContent = (display.textContent / 100);
        fuckWith[2] = display.textContent;
        currentStr = fuckWith.join(' ');
        console.log(currentStr);
    }

})



buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    if ((
      e.target.textContent == '0' ||
      e.target.textContent == '1' ||
      e.target.textContent == '2' ||
      e.target.textContent == '3' ||
      e.target.textContent == '4' ||
      e.target.textContent == '5' ||
      e.target.textContent == '6' ||
      e.target.textContent == '7' ||
      e.target.textContent == '8' ||
      e.target.textContent == '9' 
    ) && ((currentStr == '') || currentStr.split(' ').length == 1)) {
        currentStr += e.target.textContent;
        display.textContent += e.target.textContent;
        console.log(currentStr);
        console.log(currentStr.split(' '))
    } else if ((
        e.target.textContent == '0' ||
        e.target.textContent == '1' ||
        e.target.textContent == '2' ||
        e.target.textContent == '3' ||
        e.target.textContent == '4' ||
        e.target.textContent == '5' ||
        e.target.textContent == '6' ||
        e.target.textContent == '7' ||
        e.target.textContent == '8' ||
        e.target.textContent == '9' 
      ) && (currentStr.split(' ').length == 2)) {
        display.textContent = '';
        currentStr = `${currentStr} ${e.target.textContent}`;
        display.textContent += e.target.textContent;
        console.log(currentStr);
      } else if ((
        e.target.textContent == '0' ||
        e.target.textContent == '1' ||
        e.target.textContent == '2' ||
        e.target.textContent == '3' ||
        e.target.textContent == '4' ||
        e.target.textContent == '5' ||
        e.target.textContent == '6' ||
        e.target.textContent == '7' ||
        e.target.textContent == '8' ||
        e.target.textContent == '9' 
      ) && (currentStr.split(' ').length == 3)){
        currentStr += e.target.textContent;
        display.textContent += e.target.textContent;
        console.log(currentStr);
      } else if (
        e.target.textContent == '.' &&
        ((!hasBeenClick) && (!(currentStr.split(' ').length == 2)))){
            currentStr += e.target.textContent;
            display.textContent += e.target.textContent;
            console.log(currentStr);
            hasBeenClick = true; 
      }
})
})

let hasBeenClick = false;

//variable to hold the count 


buttonOp.forEach(buttonOp => {
    buttonOp.addEventListener('click', function (e) {
        hasBeenClick = false;
        if(currentStr.split(' ').length == 1) {
            currentStr = `${currentStr} ${e.target.textContent}`;
            console.log(currentStr);
        } else if (currentStr.split(' ').length == 3) {
            display.textContent = operator(currentStr);
            currentStr = `${operator(currentStr)} ${e.target.textContent}`;
            console.log(currentStr);
        }
    })
  });


buttonEqual.addEventListener('click', function () {
    if(currentStr.split(' ').length == 3) {
        hasBeenClick = false;
        console.log(currentStr.split(' '));
        currentStr = operator(currentStr);
        display.textContent = currentStr;
        console.log(currentStr);
        
    }
})

  