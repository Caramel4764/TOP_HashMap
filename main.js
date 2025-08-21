import HashMap from "./hashmap.js"

const test = new HashMap()
test.set('apple', "red")
test.set('banana', "yellow")
test.set('grape', "purple")
test.set('pear', 'green')
test.set('pineapple', 'yellow')
test.set('orange', 'orange')
test.set('cherry', 'red')

console.log(test.get('apple'))
console.log(test.has('peach'))
console.log(test.remove('pear'))
console.log(test.has('pear'))
console.log(test.length())
test.toString();