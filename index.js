// https://youtu.be/ba15sgOiAOg?si=scmGTbrVuHDKJn5q

class Queue {
  constructor() {
    // this.items = [];
    this.items = {};
    this.rear = 0;
    this.front = 0;
    // this.count = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear += 1;
    console.log(this.items);
  }
  dequeue() {
    const item = this.items[this.front];

    console.log(item, "item");
    //
    delete this.items[this.front];
    this.front += 1;
    console.log(this.items, "after delete");
    //
    console.log(this.rear, "rear");
    console.log(this.front, "front");
  }
  //
  watch() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
//
queue.dequeue();
queue.dequeue();
