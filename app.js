let form=document.querySelector('form');
let incompleateul=document.querySelector('#items');
let compleateul=document.querySelector('#ul');
let display=document.querySelector('#newtask');


// functions
function createincompleatetask(task){
    let list=document.createElement('li');
    list.className='item';
    let checkbox=document.createElement('input');
    let span=document.createElement('span')
    checkbox.type='checkbox';
    checkbox.name='check';
    checkbox.className='check'
    span.innerText=task;
    list.appendChild(checkbox);
    list.appendChild(span);
    return list
}
function addtask(event){
    event.preventDefault();
    let listitem=createincompleatetask(display.value);
    incompleateul.appendChild(listitem);
    display.value=''
    bindcheckbox(listitem,compleatetask)

}
function compleatetask(){
    let list=this.parentNode;
    let deletebtn=document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.className='delete';
    list.appendChild(deletebtn);
    let checkbox=list.querySelector('.check');
    checkbox.remove();
    compleateul.appendChild(list);
    binddeletebtn(list,deletetask)

}
function deletetask(){
    let list=this.parentNode;
    let ul=list.parentNode;
    ul.removeChild(list);
}
function binddeletebtn(task,deletebtnclick){
    let deletebtn=task.querySelector('.delete');
    deletebtn.onclick=deletebtnclick;
}
function bindcheckbox(task,checkboxclick){

    let checkbox=task.querySelector('input[type="checkbox"]');
    checkbox.onchange=checkboxclick;

}


for(let i of incompleateul.children ){
    bindcheckbox(i,compleatetask)

}
for(let i of compleateul.children){
    binddeletebtn(i,deletetask)
}

form.addEventListener('submit',addtask);