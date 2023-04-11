/*const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
secondaryPhone === typeof number;

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone


console.log('Primary phone is valid numerical string:', primaryValid)
console.log('secondary phone is valid numerical string:', secondaryValid )
*/

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = isNaN(primaryPhone) === false //isNan() function checks if primaryPhone isNan then returns true, then is true === false, the answer is false.
const secondaryValid = isNaN(secondaryPhone) === false

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)
