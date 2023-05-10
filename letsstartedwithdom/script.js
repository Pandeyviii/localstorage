// // console.log(document.all);
// console.log(document.domain);
// console.log(document.URL);
// //document.title="vishal pandey";
// //console.log(document.title);
// console.log(document.all);
// document.all[10].textContent="hello";
// console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
// headerTitle.textContent="hi vishal pandey";
// console.log(headerTitle.textContent);
// headerTitle.style.borderBottom='solid 3px black'
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px black';
// var classpra=document.getElementsByTagName('li');
// console.log(classpra);
// classpra[1].textContent='hello 2';
// classpra[1].style.color='red';
// classpra[1].style.fontWeight='bold';
// for(var i=0;i<classpra.length;i++){
//     classpra[i].style.backgroundColor='#f4f4f4'; 
// }
// var input=document.querySelector('input');
// input.value="iphone 12";
// var submit=document.querySelector('input[type="submit"]');
// submit.value="send";
// var item=document.querySelector(".list-group-item");
// item.style.color="yellow";
// var lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="red";

//traversing the dom
// var parent12=document.querySelector('#items');
// console.log(parent12.parentNode);
// parent12.parentNode.style.backgroundColor="#f4f4f4"

// create a elemrnt in the dom manipulaton
var newDiv=document.createElement("div");
newDiv.className="hello";
newDiv.id="hello 1";
var newDivText=document.createTextNode("hello vishal pandey");
newDiv.appendChild(newDivText);
console.log(newDiv);
var container=document.querySelector("header .container");
var he1=document.querySelector("header h1");
container.insertBefore(newDiv,he1);