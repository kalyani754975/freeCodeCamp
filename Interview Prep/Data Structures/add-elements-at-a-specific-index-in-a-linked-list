function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };
// "ram","shyam","mohan","aman"
// insert Ajay. at index 2
// after inserting list is
// "ram","shyam","Ajay","mohan","aman"
// "abc" at 0





  // Only change code below this line
this.addAt = function(index, element){
if(index < 0){
  return false;
} else {
  if(length < index){
    return false;
  } else {
var node = new Node(element)
if(index == 0){
node.next = head // node -> next ram
head = node // abc-> ram -> shyam
} else {
var currentnode = head; //10 20
var indexincr = 0;//1
var previous = null;//10
// 10 , 20, 30, 40
// insert 50 at 2 index
while(indexincr < index){
previous = currentnode //10 20
currentnode = currentnode.next//20 30
indexincr++

}
// node -> next =30
// means -> 50 -> 30
// 10 ,20 
node.next = currentnode
previous.next = node

// 10 20. 50 30 40




}
length++



  }
}




}
  // Only change code above this line
}
