class Stack {
  int count = 0;
  var storage = {};

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  pop() {
    if (this.count == 0) return null;
    this.count--;
    var result = this.storage[this.count];
    this.storage.remove(this.count);
    return result;
  }

  size() => this.count;

  peak() => this.storage[this.count - 1];
}

void main() {
  final myStack = new Stack();
  myStack.push('Hello');
  print(myStack.peak());
}

