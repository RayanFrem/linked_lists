import { Node } from './Node.js';

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) return currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }
    return null;
  }

  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.tail = currentNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return result + 'null';
  }

  insertAt(value, index) {
    if (index === 0) return this.prepend(value);
    const newNode = new Node(value);
    const prevNode = this.at(index - 1);
    if (!prevNode) return this.append(value);
    newNode.nextNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    const prevNode = this.at(index - 1);
    if (!prevNode || !prevNode.nextNode) return;
    prevNode.nextNode = prevNode.nextNode.nextNode;
    if (prevNode.nextNode === null) this.tail = prevNode;
  }
}
