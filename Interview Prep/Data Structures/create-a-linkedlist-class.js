function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    
var node=new Node(element)
if(head==null){
  head = node
} else {
  var currentnode = head;
while(currentnode.next){
  currentnode = currentnode.next
}
currentnode.next = node

}
length++
  }
    
  };
