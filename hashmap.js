function HashMap () {
  let loadFactor = 8;
  let capacity = 0.85;
  let map = []
  function hash(key) {
    let hashCode = 0;
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = (primeNumber * hashCode + key.charCodeAt(i))//%loadFactor;
   }
   return hashCode;
  }
  function set(key, val) {
    //no val or not same val
    if (!map[hash(key)] || map[hash(key)!=val]) {
       map[hash(key)] = {key, val};
      console.log((map[hash(key)]))
    }
    //collision error
    if (map[hash(key)].key!=key) {
      console.log(`WARNING COLLISION: ${map[hash(key)].key} != ${key}`)
    }
  }
  function get(key) {
    if (!map[hash(key)]) {
      return null
    } else {
      return map[hash(key)].val
    }
  }
  function has(key) {
    if (map[hash(key)])
    return false
  }
  return {set, get, has}
}

export default HashMap;