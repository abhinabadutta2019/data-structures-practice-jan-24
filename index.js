class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // add element to top of stack
  push(element) {
    console.log(this.count, "this.count from push start ");
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    console.log(this.items, " this.items in push");

    // this.count - 1;
    // console.log(this.count, "this.count from push end ");
    return this.count - 1;
    // return this.count;

    // return;
  }
  //remove top element in stack
  // return undefined if stack is empty
  pop() {
    if (this.count == 0) {
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    console.log(this.items, " this.items in pop");
    return deleteItem;
  }
}

const stack = new Stack();

// stack.push(100);
// stack.push(200);
// stack.push(300);

// //
// stack.pop();
const positionOfFirstElement = stack.push(100);
//as push method is returning the position, last added item
console.log(`First element added at position: ${positionOfFirstElement}`);
