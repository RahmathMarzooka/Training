//array of objects
let fruits = [{
    name: 'apple',
    number: 20
},
{
    name: 'orange',
    number: 30
},
{
    name: 'pomegranate',
    number: 30
},
{
    name: 'peach',
    number: 22
}
]

fruits.map(function (fruit) {
    fruit.availability = 'yes';
    return fruit

})


// array of numbers
let numbers = [22, 18, 33, 67, 57, 43]

numbers.map(function (number) {
    return number * 2;
})
//[44, 36, 66, 134, 114, 86]


numbers.map(function (number) {
    return false
})
// [false, false, false, false, false, false]

numbers.map(function (number) {
    return true
})
//[true, true, true, true, true, true]