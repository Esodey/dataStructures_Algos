class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length;
  }
}

var newNode = new Node('Hello');
newNode.next = new Node('not');
newNode.next.next = new Node('bad');

console.log('ehllo')