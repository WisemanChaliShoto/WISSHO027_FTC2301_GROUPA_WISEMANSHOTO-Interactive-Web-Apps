let state = 'idle'
let user = null
let calculated = '1'
 
// // Only allowed to change below


const logCalc = () => { 
     const isString = typeof calculated === 'numerical-string'
     const calculatedAsNumber = isString ? calculated : parseInt(calculated)
     //const calculatedAsNumber = parseInt(calculated)
     calculated = calculatedAsNumber + 1 
     //console.log(calculated);
 };

//console.log(calculated);
 
const calcUser = () => {
  //calculated = 
  logCalc ();
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
};
//console.log(calculated);

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
};

// // Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
