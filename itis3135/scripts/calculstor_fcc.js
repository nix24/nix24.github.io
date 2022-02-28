let calculator = document.querySelector('.calculator-fcc');
let keys = calculator.querySelector('.calc-fcc-buttons');
let screen = calculator.querySelector('.calc-fcc-screen');
let equals = calculator.querySelector('.equals');
let operator = calculator.querySelector('.operator');


keys.addEventListener('click', e => {
    //if the target is a button
    if (e.target.matches('button')) {
        //if the button does not have a data-action attribute, then it is a number
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        let displayedNum = screen.textContent;
        if (!action) {
            if (displayedNum === '0') {
                screen.textContent = keyContent;
            } else {
                screen.textContent = displayedNum + keyContent;
            }
        }
        //if data-action is clear, then clear the screen
        if (action === 'clear') screen.textContent = '0';
        //if data-action is delete, only delete the last character
        if (action === 'delete') screen.textContent = displayedNum.slice(0, -1);
        //if decimal is clicked, only add it if it is not already there
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) screen.textContent = displayedNum + '.';
        }
       if(action === 'evaluate') {
            //evaluate everything on the screen
            let result = eval(displayedNum);
            screen.textContent = result;
       }

    }

});


