var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.style.borderBottom = "solid 3px #000";
headerTitle.textContent = "Hello there !"
var li = document.getElementsByTagName('li');
li[2].style.backgroundColor = "green";
var items = document.querySelector('li')
for(i = 0; i < li.length; i++){
     li[i].style.textTransform = 'uppercase';
}
var list = document.getElementsByClassName('list-group-item');
   list[1].style.backgroundColor = "#ccc";
var list = document.getElementsByTagName('li');
    list[0].style.backgroundColor = "blue";
var input = document.querySelector('input');
input.value = "Hello world";