/*firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()
*/
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = () => {
  console.log((`Hello, ${firstName} (${age}). I love ${hobby}!`))
  console.log((`Hello, ${firstName} (${age}). I love ${hobby}!`))
  
};

// const hobby = () => {
//   logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
// }

logTwice()