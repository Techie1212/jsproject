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