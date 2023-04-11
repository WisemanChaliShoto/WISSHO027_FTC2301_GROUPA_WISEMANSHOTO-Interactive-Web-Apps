/*
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result) 
*/
const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} Owed: R ${parseFloat(leoBalance).toFixed(2)}`;
const sarah = `${sarahName} ${sarahSurname} Owed: R ${parseFloat(sarahBalance).toFixed(2)}`;
const total = `  Total amount owed: R ${owed.toFixed(2)}`;
const result = `\n${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`;

console.log(result);
