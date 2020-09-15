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
    this.length = 0;;
  }

  push (val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return undefined;
    const current = this.head;
    const newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift () {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift (val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index > this.length - 1) return null;
    const current = this.head;
    let count  = 0; 
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set (index, val)  {
    if (index < 0 || index > this.length - 1) return null;
      const foundNode = this.get(index);
      if (foundNode) {
        foundNode.val = val;
        return true;
      }
      return false;
  }
}