const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(char => char.name)
console.log('names: ', names)

//2. Get array of all heights
const heights = characters.map(char => char.height)
console.log('heights: ', heights)

//3. Get array of objects with just name and height properties
const namesAndHeights = characters.map(char => ({name: char.name, height: char.height}))
console.log('namesAndHeights: ', namesAndHeights)

//4. Get array of all first names
const firstNames = characters.map(char => char.name.split(' ')[0])
console.log('firstNames: ', firstNames)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass)
console.log('totalMass: ', totalMass)

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc + curr.height)
console.log('totalHeight: ', totalHeight)

//3. Get total number of characters by eye color
const charsByEyeColor = characters.reduce((acc, curr) => {
    const eyeColor = curr.eye_color

    if(acc[eyeColor]){
        acc[eyeColor]++
    } else {
        acc[eyeColor]=1
    }

    return acc
}, {})
console.log('charsByEyeColor', charsByEyeColor)

//4. Get total number of characters in all the character names
const totalChars = characters.reduce((acc, curr) => acc + curr.name.length, 0)
console.log('totalChars: ', totalChars);

//***FILTER***

//1. Get characters with mass greater than 100
const greater100 = characters.filter(char => char.mass > 100)
console.log('greater100: ', greater100)

//2. Get characters with height less than 200
const less200 = characters.filter(char => char.mass < 200)
console.log('less200: ', less200)

//3. Get all male characters
const maleChars = characters.filter(char => char.gender === 'male')
console.log('maleChars: ', maleChars)

//4. Get all female characters
const femaleChars = characters.filter(char => char.gender === 'female')
console.log('femaleChars: ', femaleChars)

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b)=> a.mass - b.mass)
console.log('byMass: ', byMass)

//2. Sort by height
const byHeight = characters.sort((a, b)=> a.height - b.height)
console.log('byHeight: ', byHeight)

//3. Sort by name
const byName = characters.sort((a, b)=> {
    if(a.name < b.name) return -1
    return 1
})
console.log('byName: ', byName)

//4. Sort by gender
const byGender = characters.sort((a, b)=> {
    if(a.gender === 'male') return -1
    return 1
})
console.log('byGender: ', byGender)

//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every(char => char.eye_color === 'blue')
console.log('blueEyes: ', blueEyes)

//2. Does every character have mass more than 40?
const heavier40 = characters.every(char => char.mass > 40)
console.log('heavier40: ', heavier40)

//3. Is every character shorter than 200?
const shorter40 = characters.every(char => char.height < 200)
console.log('shorter40: ', shorter40)

//4. Is every character male?
const everyMale = characters.every(char => char.gender === 'male')
console.log('everyMale: ', everyMale)

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some(char => char.gender === 'male')
console.log('oneMale: ', oneMale)

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(char => char.eye_color === 'blue')
console.log('oneBlueEyes: ', oneBlueEyes)

//3. Is there at least one character taller than 210?
const taller210 = characters.some(char => char.height > 210)
console.log('taller210: ', taller210)

//4. Is there at least one character that has mass less than 50?
const lighter50 = characters.some(char => char.mass < 50)
console.log('lighter50: ', lighter50)
