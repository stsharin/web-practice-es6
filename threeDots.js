const ages = [12, 14, 16, 13, 17];
const ages2 = [15,  16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]; // spread operator (...)
// console.log(allAges);
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];

const maximum = Math.max(...takaPoisha);
console.log(maximum);