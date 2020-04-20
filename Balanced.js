var Stack = function (){
	this.count = 0;
	this.store = {};

	this.push = (item)=>{
		this.store[this.count] = item ;
		this.count++;
	}

	this.Pair = (opened,closed)=> {
		var list = ['(',')','{','}','[',']'];
	    if(list.indexOf(opened) === list.indexOf(closed) -1) {
		  console.log('\x1b[32m',`Closing of ${list[list.indexOf(opened)]}${list[list.indexOf(closed)]} Are good! `);
		    this.pop();
	 }
	  else {
	 console.log('\x1b[31m',`Closing of ${list[list.indexOf(opened)]}${list[list.indexOf(closed)]} NOT good! `)
		}
	}

	this.isBalanced = (exp)=> {
		for(var i=0;i<exp.length;i++){
		if(exp[i] === '(' || exp[i] === '{' || exp[i] === '[')
			this.push(exp[i]);

		else if(exp[i] === ')' || exp[i] === '}' || exp[i] === ']'){
			if(this.size() === 0) return false;
		 this.Pair(this.peak(),exp[i]) 
		}
		}


	}

	this.pop =  ()=>{
		if(this.count === 0) return undefined;
		this.count --;
		var result = this.store[this.count];
		delete this.store[this.count];
		return result;
		
	}

	this.size = ()=> this.count;

	this.peak = ()=> this.store[this.count-1]
}

var myStack = new Stack();
console.log(myStack.isBalanced('(){]'));
