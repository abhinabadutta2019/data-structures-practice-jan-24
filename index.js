// https://www.youtube.com/watch?v=NuBWJ7kIlDg&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=44

class Queue {
  constructor() {
    this.items = [];
    // this.count = 0;
  }
  enqueue(element) {
    this.items.push(element);
    console.log(this.items, "from enqueue");
  }
  //
  dequeue(element) {
    this.items.shift(element);
    console.log(this.items, "from dequeue");
  }
  printItems() {
    // console.log(this.items.toString());
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(40);
// console.log(this.items);
queue.printItems();
queue.dequeue();
// queue.dequeue();
// queue.printItems();
