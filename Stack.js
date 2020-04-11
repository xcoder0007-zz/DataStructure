var Stack = function (){
	this.count = 0;
	this.store = {};

	this.push = (item)=>{
		this.store[this.count] = item ;
		this.count++;
	}

	this.pop =  ()=>{
		(this.count === 0 ? undefined : '');
		this.count --;
		var result = this.store[this.count];
		delete this.store[this.count];
		return result;
		
	}

	this.size = ()=> this.count;

	this.peak = ()=> this.store[this.count-1]
}

var myStack = new Stack();
myStack.push('Hello there!');
myStack.push('Hello there again!');
console.log(myStack.pop());
