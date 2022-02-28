let clear = document.getElementById('clear');
let del = document.getElementById('delete');
let equal = document.getElementById('equals');

let decimal = document.getElementById('decimal');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let subtract = document.getElementById('subtract');

let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let multiply = document.getElementById('multiply');

let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let divide = document.getElementById('divide');

let display = document.getElementById('calc-display');

clear.addEventListener('click', function () { display.innerHTML = ''; });
del.addEventListener('click', function () { display.innerHTML = display.innerHTML.slice(0, -1); });
equal.addEventListener('click', function () { display.innerHTML = eval(display.innerHTML); });
decimal.addEventListener('click', function () { display.innerHTML += '.'; });

plus.addEventListener('click', function () { display.innerHTML += '+'; });
subtract.addEventListener('click', function () { display.innerHTML += '-'; });
multiply.addEventListener('click', function () { display.innerHTML += '*'; });
divide.addEventListener('click', function () { display.innerHTML += '/'; });

zero.addEventListener('click', function () { display.innerHTML += '0'; });
one.addEventListener('click', function () { display.innerHTML += '1'; });
two.addEventListener('click', function () { display.innerHTML += '2'; });
three.addEventListener('click', function () { display.innerHTML += '3'; });
four.addEventListener('click', function () { display.innerHTML += '4'; });
five.addEventListener('click', function () { display.innerHTML += '5'; });
six.addEventListener('click', function () { display.innerHTML += '6'; });
seven.addEventListener('click', function () { display.innerHTML += '7'; });
eight.addEventListener('click', function () { display.innerHTML += '8'; });
nine.addEventListener('click', function () { display.innerHTML += '9'; });

