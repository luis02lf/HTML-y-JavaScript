// explicit type casting
const string = '42'
const integer = parseInt(string)

console.log(integer)
console.log(typeof integer)

const stringDecimal ='3.24'
const float = parseFloat(stringDecimal)

console.log(float)
console.log( typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log( typeof decimal)

// explicit type casting

const sum ='5' + 3
console.log(sum)
const sumwinthboolean = '2'+ true
console.log(sumwinthboolean)


const stringvalue ='10'
const numbervalue = 10
const booleanvalue = true

console.log('---------------------------')
console.log(stringvalue + stringvalue) // suma 
console.log(stringvalue + numbervalue) // concatena 
console.log(stringvalue + booleanvalue) //concatena
console.log( numbervalue + stringvalue) //concatena
console.log(numbervalue + numbervalue) //suma 
console.log(numbervalue + booleanvalue) //suma 
console.log(booleanvalue + stringvalue) //concatena
console.log(booleanvalue + numbervalue) //suma 
console.log(booleanvalue + booleanvalue)//suma
