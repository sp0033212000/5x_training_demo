/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */

class DataNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class DataNodeHelp {
  constructor() {
    this.length = 0;
    this.head = null;
    this.last = null;
  }

  append(data) {
    const node = new DataNode(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
    }

    this.length++;
    this.last = node;
  }

  indexOf(index) {
    if (index < 0 || index > this.length) return null;
    let idx = 0;
    let node = null;

    if (index === 0) {
      node = this.head;
    } else if (index === this.length) {
      node = this.last;
    } else {
      node = this.head;
      while (idx++ < index - 1) {
        node = node.next;
      }
    }

    return node.data;
  }
}
