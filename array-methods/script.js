var people = [
    {
        name: 'Adams Miller',
        age: 27,
        occupation: 'musician'

    },
    {
        name: 'John Texas',
        age: 30,
        occupation: 'Software Developer '
    },
    {
        name: 'John Sheldon',
        age: 33,
        occupation: 'Teacher'
    },
    {
        name: 'Steve Mark',
        age: 20,
        occupation: 'Artist'
    }

]
//get all name

people.forEach(function (person) {
    console.log(person.name)
})


//get all age
var age = people.map(function (person) {
    return person.age;
})
console.log(age);

//get person with age more than 29
var filteredAge = people.filter(function (person) {
    return person.age > 29;
})
console.log(filteredAge)


//get the first person with the age more than 29
var findAge = people.find(function (person) {
    return person.age > 29;
})
console.log(findAge)