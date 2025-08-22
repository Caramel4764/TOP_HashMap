import HashMap from "./HashMap.js"

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('lion', 'golden')
test.set('kite', 'pink')
test.set('moon', 'silver')
// console.log(test.get('grape'))
// console.log(test.get('hat'))
// console.log(test.get('duck'))
// console.log(test.has('duck'))
// console.log(test.has('grape'))
// console.log(test.remove('grape'))
// console.log(test.has('grape'))

// console.log(test.length())
// console.log(test.values())
// console.log(test.keys())
console.log(test.entries())

console.log(test.getCollision())

console.log(test.getLoadFactor());




