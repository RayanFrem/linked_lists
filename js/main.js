import { LinkedList } from './LinkedList.js';

const linkedList = new LinkedList();
const listDisplay = document.getElementById('listDisplay');
const appendBtn = document.getElementById('appendBtn');
const prependBtn = document.getElementById('prependBtn');
const sizeBtn = document.getElementById('sizeBtn');
const headBtn = document.getElementById('headBtn');
const tailBtn = document.getElementById('tailBtn');
const popBtn = document.getElementById('popBtn');
const containsBtn = document.getElementById('containsBtn');
const findBtn = document.getElementById('findBtn');
const insertAtBtn = document.getElementById('insertAtBtn');
const removeAtBtn = document.getElementById('removeAtBtn');
const valueInput = document.getElementById('valueInput');

function updateDisplay(text = null) {
  listDisplay.textContent = text || linkedList.toString();
}

appendBtn.addEventListener('click', () => performOperation('append'));
prependBtn.addEventListener('click', () => performOperation('prepend'));
sizeBtn.addEventListener('click', () => alert(`Size: ${linkedList.size()}`));
headBtn.addEventListener('click', () => {
  const head = linkedList.getHead(); 
  alert(`Head: ${head ? head.value : 'null'}`);
});
tailBtn.addEventListener('click', () => {
  const tail = linkedList.getTail();
  alert(`Tail: ${tail ? tail.value : 'null'}`);
});
popBtn.addEventListener('click', () => performOperation('pop'));
containsBtn.addEventListener('click', () => performOperation('contains'));
findBtn.addEventListener('click', () => performOperation('find'));
insertAtBtn.addEventListener('click', () => performOperation('insertAt'));
removeAtBtn.addEventListener('click', () => performOperation('removeAt'));

function performOperation(operation) {
  let value = parseInt(valueInput.value, 10);
  let index, found, contains;
  
  switch(operation) {
    case 'append':
      if (!isNaN(value)) linkedList.append(value);
      break;
    case 'prepend':
      if (!isNaN(value)) linkedList.prepend(value);
      break;
    case 'pop':
      linkedList.pop();
      break;
    case 'contains':
      contains = linkedList.contains(value);
      alert(`Contains ${value}: ${contains}`);
      return;
    case 'find':
      found = linkedList.find(value);
      alert(`Find ${value}: ${found}`);
      return;
    case 'insertAt':
      index = prompt("Enter index to insert at:");
      if (!isNaN(value) && index !== null && !isNaN(index)) {
        linkedList.insertAt(value, parseInt(index, 10));
      }
      break;
    case 'removeAt':
      index = prompt("Enter index to remove:");
      if (index !== null && !isNaN(index)) {
        linkedList.removeAt(parseInt(index, 10));
      }
      break;
  }
  updateDisplay();
  valueInput.value = '';
}

updateDisplay();
