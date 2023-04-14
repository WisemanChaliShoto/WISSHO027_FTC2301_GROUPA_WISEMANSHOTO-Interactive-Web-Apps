// script.js

/*const order1 = document(order1)

Biscuits:document.querySelector('#order1'),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending*/

// script.js

const order1 = document.querySelector('dl[data-key="order1"]');
const order2 = document.querySelector('dl[data-key="order2"]');
const order3 = document.querySelector('dl[data-key="order3"]');

const order1Biscuits = order1.getAttribute('data-biscuits');
const order1Donuts = order1.getAttribute('data-donuts');
const order1Pancakes = order1.getAttribute('data-pancakes');
const order1Status = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order2Biscuits = order2.getAttribute('data-biscuits');
const order2Donuts = order2.getAttribute('data-donuts');
const order2Pancakes = order2.getAttribute('data-pancakes');
const order2Status = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order3Biscuits = order3.getAttribute('data-biscuits');
const order3Donuts = order3.getAttribute('data-donuts');
const order3Pancakes = order3.getAttribute('data-pancakes');
const order3Status = order3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

order1.querySelector('.biscuits .count').textContent = order1Biscuits;
order1.querySelector('.donuts .count').textContent = order1Donuts;
order1.querySelector('.pancakes .count').textContent = order1Pancakes;
order1.querySelector('.status dd').textContent = order1Status;

order2.querySelector('.biscuits .count').textContent = order2Biscuits;
order2.querySelector('.donuts .count').textContent = order2Donuts;
order2.querySelector('.pancakes .count').textContent = order2Pancakes;
order2.querySelector('.status dd').textContent = order2Status;

order3.querySelector('.biscuits .count').textContent = order3Biscuits;
order3.querySelector('.donuts .count').textContent = order3Donuts;
order3.querySelector('.pancakes .count').textContent = order3Pancakes;
order3.querySelector('.status dd').textContent = order3Status;
