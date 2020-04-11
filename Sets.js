var Sets = function(){
	this.collection = [];

	this.itHas = (item) => (this.collection.indexOf(item) !== -1 ? this.collection.indexOf(item) : false);	
   
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

	this.union = function(outSet){
		let self = new Sets();
		let selfSetItems = this.items();
		let outSetItems = outSet.items();

		outSelfItems.forEach((e) => self.add(e));
		selfSetItems.forEach((e) => outSet.add(e));

		return outSet;
	}



}

var mySets = new Sets();
console.log(mySets.add('Hi there'))
console.log(mySets.add('Hi there'))
console.log(mySets.add('Hi there'))
console.log(mySets.add('Hi there'))
console.log(mySets.add('Unique'))
console.log(mySets.items())
console.log(mySets.remove('Unique'))
console.log(mySets.items())

