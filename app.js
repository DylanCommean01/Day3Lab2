const NUMBER_OF_STATES = 50;

//Adds 5 + 4 and displays the result.
let result = 5 + 4;
console.log(result);

//If a person's name begins with L or greater the program alerts "Back of the Line!", else alerts "Next!"
let myName = 'Dylan';
let unicodeNumber = myName.charCodeAt(0);
if (unicodeNumber > 76) {
    alert('Back of the Line!');
}
else {
    alert('Next!');
}

//displays an alert that says "Hello!"
function sayHello() {
    alert('Hello World!');
}
sayHello();

//Checks if age is less than 21 and displays alert if they are no old enough
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//Prints out an array of my favorite vegetables
let favoriteVegetables = ['Corn', 'Carrots', 'Potatoes', 'Beats']

for (i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}

//Checks if the array of people is old enough and explains alerts if not old enough.
let peopleOfInterest = [
    {
        name: 'Dylan',
        age: 24,
    },
    {
        name: 'Seth',
        age: 16,
    },
    {
        name: 'Miranda',
        age: 23
    },
    {
        name: 'Jon',
        age: 48,
    }
]

for (j = 0; j < peopleOfInterest.length; j++) {
    checkAge(peopleOfInterest[j].name, peopleOfInterest[j].age);
}

//Finds the Length of a string
function getLength(word) {
    return word.length;
}

let numberOfChar = getLength('Hello World');

//If the length of a string is even prints that it's even, else prints odd.
if (numberOfChar % 2 === 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!')
}