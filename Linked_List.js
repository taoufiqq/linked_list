class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
//  1 add to header
insertToHead(){
   let data = document.getElementById('data').value;
   let res = document.getElementById('resultat');
  this.head = new Node(data, this.head);
  res.innerHTML = this.head.data;
  this.size++;
}
// 2 add to last

insertLastNode(){
  let data = document.getElementById('data').value;
  let res = document.getElementById('resultat');
  let node = new Node(data);
  let tmp;
  // if empty
  if (!this.head) {
    this.head = node;
  }else {
    tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = node;
  }
  this.size++;
  res.innerHTML = node.data + "<br>";
}

//  3 insert at index
insertByIndex(){
  let data = document.getElementById('data').value;
  let index = document.getElementById('index').value;
  // if index out of range
if (index > 0 && index > this.size) {
  return;
}
  // if index = 0
if (index === 0) {
  this.head = new Node(data, this.head);
  return;
}
let node = new Node(data);
let current;
let prev;

current = this.head;
let count = 0;

while (count < index) {
  prev = current;
  count++;
  current = current.next;
}
node.next = current;
prev.next = node;
}

// 4 get at index
getNodeByIndex(){
  let index = document.getElementById('index').value;
  let res = document.getElementById('resultat');
  if (index > 0 && index > this.size) {
    return;
  }
  let current;
  let count = 0;

current = this.head;
  while (count < index) {
    count++;
    current = current.next;
  }
  console.log(current.data);
  res.innerHTML = current.data;


}

//  5 print LinkedList
printList(){
	resultat.innerHTML =" ";
  let tmp = this.head;
  while (tmp) {

    resultat.innerHTML += tmp.data + "<br>";
    // console.log(tmp.data);
    tmp = tmp.next;
  }
}

 // 6 remove at index
removeByIndex(){
  let index = document.getElementById('index').value;
  if (index > 0 && index > this.size) {
    return;
  }
  let current;
  let prev;
  let count = 0;

current = this.head;
  while (count < index) {
    prev = current;
    count++;
    current = current.next;
  }
  prev.next = current.next;
}

 // 7 clear list

clearList(){
  let res = document.getElementById('resultat');
this.head = null;
this.size = 0;
res.innerHTML = "list is empty";

}



}

let node = new LinkedList();


function insertToHead(){
  node.insertToHead();
}

function insertLastNode(){
  node.insertLastNode();
}

function insertByIndex(){
  node.insertByIndex();
}

function getNodeByIndex(){
  node.getNodeByIndex();
}

function removeByIndex(){
  node.removeByIndex();
}

function clearList(){
  node.clearList();
}

function printList(){
  node.printList();
}
