//Social Media Profile

//1. User information

const username = 'jhondoe1234'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//2. Address

const address = {
    street: 'main st. 123',
    city: 'new york',
    state: 'New York',
    zipCode: '33912'
}

//3. Hobbies

 const hobbies = ['Coding', 'Gaming', 'Gym']

 //4. Generating personalized bio

 const personalizedBio = `Hi, I'm ${fullName}.
 I'm ${age} years old.
 I live in ${address.city}, ${address.state}.
 I love ${hobbies.join(', ')}.
 Follow me for coding adventures`

 //5. Print

 console.log(personalizedBio)