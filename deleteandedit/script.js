var form=document.getElementById('addForm');
var item=document.getElementById('items');
form.addEventListener('submit',addItem);
item.addEventListener('click',remove);

function addItem(e){
    e.preventDefault();
   // console.log("hii vishal pandey u are going on right direction");

    var newItem=document.getElementById("item");
    var li=document.createElement("li");
    li.className="list-group-item";
    // console.log(li);
    var deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    li.appendChild(document.createTextNode(newItem.value));
    item.appendChild(li);

}
function remove(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are u sure")){
            var li=e.target.parentElement;
            item.removeChild(li);

        }
       // console.log(1);

    }
                
}