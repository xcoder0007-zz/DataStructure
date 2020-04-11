var Sets = function(){
	this.collection = [];

	this.itHas = (item) => (this.collection.indexOf(item) !== -1 ? true : false);	
   
	this.items = ()=> this.collection;
	
	this.add = (item) => (this.itHas(item) === false  ? this.collection.push(item) : false);

        this.remove = (item) => {
	let Index = this.itHas(item); 
	 if(Index){
		 this.collection.splice(Index,1);
		 return true;
	 }
		return false;
	}
	
	this.size = ()=> this.collection.length;

	this.union = (outSet) => {
		let unionSet = new Sets();
		let selfSetItems = this.items();
		let outSetItems = outSet.items();

		selfSetItems.forEach((e) => unionSet.add(e));
		outSetItems.forEach((e) => unionSet.add(e));

		return unionSet;
	}


	this.intersection = (outSet)=> {
		let intersectionSet = new Sets();
		let selfSet = this.items();
		selfSet.forEach((item) => (outSet.itHas(item) ? intersectionSet.add(item) : null));

		return intersectionSet;
	}

        this.difference = (outSet)=> {
		let differenceSet = new Sets();
		let selfSet = this.items();
			selfSet.forEach((item) => (!outSet.itHas(item)  ? differenceSet.add(item) : null));

		return differenceSet;

	}

	this.subset = (outSet)=> {
	let selfSetItems = this.items();
	return selfSetItems.every((item) => outSet.itHas(item));
	}
}

const A = new Sets();
const B = new Sets();

A.add('a');
B.add('a');
B.add('x');
A.add('b');
B.add('b');
B.add('c');
console.log(B.difference(A).items());
