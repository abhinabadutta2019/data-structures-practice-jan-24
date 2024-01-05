//https://youtu.be/oIR_DOOOACk?si=bcJCF-nTwelN8cnd
class CircualarQueue {
  constructor(capacity) {
    //
    this.items = new Array();
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  //
  isFull() {
    return this.currentLength === this.capacity;
  }
  //
  isEmpty() {
    return this.currentLength === 0;
  }
  //
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      //
      if (this.front === -1) {
        this.front = this.rear;
      }
      console.log(this.items);
    }
  }
  //
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    //
    console.log(this.items, "de queue");
    //
    return item;
  }
  //
  // print() {
  //   if (this.isEmpty()) {
  //     console.log("Queue is isEmpty");
  //   } else {
  //     let i;
  //   }
  // }
}

const circularQueue = new CircualarQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
//
circularQueue.dequeue();
circularQueue.enqueue(100);
