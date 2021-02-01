const person = { fname: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn'] };

// const gfName = person.gfName;
// const phone = person.phone;

// phone -> object's property
const { phone, gfName, salary } = person; 
// console.log(gfName, phone, salary);

const complexObject = {
    fname:  'abc',
    info: {
        address: 'Kolabagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);

const friends = ['Sakib Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;
// console.log(chotoFriend, nextFriend);
// console.log(restFriend);