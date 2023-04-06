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

const primaryValid = isNaN(primaryPhone) === false //is primaryPhone a number
const secondaryValid = isNaN(secondaryPhone) === false

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)
