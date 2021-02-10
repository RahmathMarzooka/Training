
//array of numbers


let numbers = [22, 18, 33, 67, 57, 43]

numbers.filter(function (number) {
    return number > 50
})
//57,67


numbers.filter(function (number) {
    return false
})
// []

numbers.filter(function (number) {
    return true
})
// [22, 18, 33, 67, 57, 43]



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


fruits.filter(function (fruit) {
    return fruit.name.startsWith('p')
})