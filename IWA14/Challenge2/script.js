/*function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
*/
const add = (a, b) =>{
	return a + b;
  }
  
const multiply = (a, b) => {
	return a * b;
  }
  
  function internal() {
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(this.internal.a, this.internal.b);
	return multiplied;
  }
  
  const example1 = {
	internal: {
	  a: 2,
	  b: 4,
	  c: 8,
	},
	add,
	multiply,
	calculate: internal
  };
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	add,
	multiply,
	calculate: internal
  };
  
  console.log(example1.calculate());
  console.log(example2.calculate());
  