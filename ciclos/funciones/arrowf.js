const greeting = function (name) {
    return `Hi, ${name}`
}

//  explicit return 

const newGreeting = (name) => {
    return `Hi, ${name}`
}

//implicit return 

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical 

const finctionalCharacter = {
    name: 'Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')
