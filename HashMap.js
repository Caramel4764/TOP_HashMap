import Node from "./Node.js"

function HashMap () {
  let loadFactor = 16;
  let capacity = 0.85;
  let collision = 0;
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
    let currNode;
    //empty val
    if (!map[hash(key)]) {
      map[hash(key)] = new Node(key, val);
      console.log((map[hash(key)]))
    } else {
      currNode = map[hash(key)];
      if (currNode.key==key) {
        //already existing value/replace
        currNode = new Node(key, val,currNode.nextNode);
        console.log((currNode))
      }
      while(currNode.nextNode != null) {
        currNode = currNode.nextNode;
        if (currNode.key==key) {
          currNode = new Node(key, val,currNode.nextNode);
          console.log((currNode))
        }
      }
    }

    //collision happened
    if (map[hash(key)] && map[hash(key)].key!=key) {
      collision++;
      console.log(`WARNING COLLISION: ${map[hash(key)].key} != ${key}`)
      //add to end of linked list
      let currNode = map[hash(key)];
      while (currNode.nextNode != null) {
        currNode = currNode.nextNode
      }
      currNode.nextNode = new Node(key, val);
    }
  }
  function get(key) {
    let currNode = map[hash(key)];
    if (!currNode) {
      //not a valid key
      return null
    }
    if (currNode.key == key) {
      return currNode.val;
    }
    while(map[hash(key)].nextNode != null) {
      currNode = currNode.nextNode;
      if (currNode.key == key) {
        return currNode.val;
      }
    }
    return null;
  }
  function has(key) {
    let currNode = map[hash(key)];
    if (currNode && currNode.key == key) {
      return true;
    }
    while (currNode && currNode.nextNode!=null) {
      currNode=currNode.nextNode;
      if (currNode && currNode.key == key) {
        return true;
      }
    }
    return false;
  }
  function remove(key) {
    let currNode = map[hash(key)];
    if (!currNode) {
      console.log(`${key} doesn't exist`)
      return false;
    }
    let prevNode;
    if (currNode && currNode.key == key) {
      map[hash(key)]=currNode.nextNode;
      return true;
    }
    while (currNode.nextNode!=null) {
      prevNode = currNode;
      currNode = currNode.nextNode;
      if (currNode && currNode.key == key) {
        prevNode.nextNode = null
        currNode = undefined;
        return true;
      }
    }
    return false;
  }
  function length() {
    let count = 0;
    let currNode;
    for (let i = 0; i < loadFactor; i++) {
      if (map[i]) {
        currNode = map[i]
        count++;
        while(currNode.nextNode != null){
          currNode = currNode.nextNode;
          count++;
        }
      }
    }
    return count
  }
  function toString() {
    for (let i = 0; i<map.length;i++) {
      console.log(map[i])
    }
  }
  function clear() {
    map = [];
  }
  function keys() {
    let keyList = [];
    let currNode;
    map.forEach(arr => {
      if (arr) {
        currNode = arr;
        keyList.push(currNode.key);
        while(currNode.nextNode!=null) {
          currNode = currNode.nextNode;
          keyList.push(currNode.key);
        }
      }
    });
    return keyList;
  }

  function values() {
    let valList = [];
    let currNode;

    map.forEach((arr)=>{
      if (arr) {
        currNode = arr;
        valList.push(currNode.val);
        while(currNode.nextNode!=null) {
          currNode = currNode.nextNode;
          valList.push(currNode.val);
        }
      }
    })
    return valList;
  }
  function entries() {
    let entryList = [];
    let currNode;
    map.forEach((arr)=>{
      if (arr) {
        currNode=arr;
        entryList.push(currNode);
        while(currNode.nextNode!=null) {
          currNode = currNode.nextNode;
          entryList.push(currNode);
        }
      }
    })
    return entryList;
  }
  return {set, get, has, remove, length, toString, clear, keys, values, entries}
}

export default HashMap;