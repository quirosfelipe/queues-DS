// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next = null
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let currentFront = this.front;
      this.front = null;
      this.back = null;
      this.length--;
      return currentFront.value;
    } else {
      let currentFront = this.front;
      let newFront = currentFront.next;
      this.front = newFront;
      this.length--;
      return currentFront.value;
    }
  }
  //    BACK -------------> FRONT
  //    QUEUE               DEQUEUE
  //   .NEXT is always pointing to the node to the left
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
