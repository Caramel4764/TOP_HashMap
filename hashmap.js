function HashMap () {
  let loadFactor = 8;
  let capacity = 0.85;
  let map = []
  function hash(key) {
    let hashCode = 0;
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = (primeNumber * hashCode + key.charCodeAt(i))%loadFactor;
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
    if (map[hash(key)] && map[hash(key)].key == key) {
      return true;
    }
    return false;
  }
  function remove(key) {
    if (map[hash(key)] && map[hash(key)].key == key) {
      map[hash(key)] = undefined;
      return true;
    }
    return false;
  }
  function length(key) {
    return map.length
  }
  function toString() {
    for (let i = 0; i<map.length;i++) {
      console.log(map[i])
    }
  }
  return {set, get, has, remove, length, toString}
}

export default HashMap;