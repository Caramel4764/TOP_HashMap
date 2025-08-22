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

console.log({allEntries: test.entries()})
console.log({arrLength: test.getMapArrLength()})
console.log({collisions: test.getCollision()})
console.log({buckets: test.getLoadFactor()});

console.log({grapeVal: test.get('grape')})
console.log({hatVal: test.get('hat')})
console.log({duckVal: test.get('duck')})
console.log({hasDuck: test.has('duck')})
console.log({hasGrape: test.has('grape')})
console.log({removeGrape: test.remove('grape')})
console.log({hasGrape: test.has('grape')})

console.log({numOfNodes: test.length()})
console.log({allVals: test.values()})
console.log({allKeys: test.keys()})
