/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newVal = new Node(val);
    if (this.head === null) this.head = newVal;
    if (this.tail !== null) {
      newVal.prev = this.tail;
      this.tail.next = newVal;
    }
    this.tail = newVal;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newVal = new Node(val);
    if (this.head !== null) newVal.next = this.head;
    if (this.tail === null) this.tail = newVal;
    this.head = newVal;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) return null;

    if (this.head === this.tail) {
      const popped = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }

    let current = this.head;
    while (this.tail !== current.next) {
      current = current.next;
    }
    const popped = current.next.val;
    this.tail = current;
    this.length -= 1;
    return popped;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

//let insects = new LinkedList(["ant", "bee", "caterpillar"]);
//let popped = insects.pop();

let lst = new LinkedList([5, 10]);
lst.pop();
lst.pop();

module.exports = LinkedList;
