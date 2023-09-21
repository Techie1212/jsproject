var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.style.borderBottom = "solid 3px #000";
headerTitle.textContent = "Hello there !"
var li = document.getElementsByTagName('li');
li[1].style.backgroundColor = "green";
li[2].style.display = "none"
var items = document.querySelector('li')
for(i = 0; i < li.length; i++){
     li[i].style.textTransform = 'uppercase';
}
var input = document.querySelector('input');
input.value = "Hello world";
var listItems = document.querySelector('#items');
console.log(listItems.firstChild);
console.log(listItems.lastChild);
console.log(listItems.previousSibling);
console.log(listItems.previousElementSibling);
console.log(listItems.children);
console.log(listItems.firstElementChild);
console.log(listItems.lastElementChild);
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello world');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
