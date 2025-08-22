function Node(key, val, nextNode=null) {
  let node = {
    key,
    val,
    nextNode,
  }
  return node
}

export default Node;