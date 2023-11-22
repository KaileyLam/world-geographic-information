const animals = [
    {
        name: "cat",
        size: "small",
        weights: 5,
    },
    {
        name: "cat",
        size: "small",
        weights: 15,
    },
    {
        name: "cat",
        size: "small",
        weights: 5,
    },
];

const weights = animals.map((item) => animals.weight)
console.log(weights);

const numbers = [1,2,3,4,5,6,7,8,9];
const evenNumber = numbers.filter((item) => item % 2 == 0);
console.log(evenNumber);



// const playerProfileModified = playerProfile.reduce((previousValue, currentValue) => {
//     return Object.assign(previousValue, {[currentValue.name]: "team" + currentValue.team});
// })

const playerProfile = [
    { name: "A", team: "A"},
    { name: "B", team: "B"},
    { name: "C", team: "C"},
];

const result1 = playerProfile.reduce((obj, item) => {
    obj[item.name] = {team: item.team};
    return obj;
}, {})

console.log(result1);
// const result = (data) => {
//     return data.reduce((obj, item) => {
//         console.log(obj);
//         obj[item.name] = {team: item.team};
//         return obj;
//     }, {});
// };
// const result1 = result(playerProfile);
// console.log(result1);


