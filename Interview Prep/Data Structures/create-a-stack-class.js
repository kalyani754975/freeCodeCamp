// implementing all the methods (push,pop,peek,isEmpty,clear) in the stack using  stack class

class Stack { 
  // here constructor is initializing the object of the class
  constructor() {
    // initializing the collection as a empty stack
    this.collection=[];
    
  }
// creating the push method adding element in the stack
push(element) {
 this.collection.push(element)
return this.collection;
}
// creating the isEmpty method to check whether stack is empty or not 
isEmpty(){
  return this.collection.length==0; 
}
// creating the peek method to know the last element of the stack
peek(){
  return this.collection[this.collection.length-1]
}
// creating the clear method to remove all element of the stack
clear(){
  return this.collection=[];
}
// creating the pop method to remove the last element from the stack
pop(){
  return this.collection.pop()
}

}
