let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

const input=document.getElementById("taskInput");

const task=input.value.trim();

if(task===""){

alert("Enter a task");

return;

}

tasks.push({

text:task,
done:false

});

saveData();

input.value="";

}

function displayTasks(){

const list=document.getElementById("taskList");

list.innerHTML="";

let completed=0;

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.done){

completed++;

}

li.innerHTML=`

<span class="${task.done ? "completed":""}">

${task.text}

</span>

<div class="actions">

<button class="complete"

onclick="toggleTask(${index})">

✔

</button>

<button class="delete"

onclick="deleteTask(${index})">

🗑

</button>

</div>

`;

list.appendChild(li);

});

document.getElementById("total").innerText=tasks.length;

document.getElementById("completed").innerText=completed;

}

function toggleTask(index){

tasks[index].done=!tasks[index].done;

saveData();

}

function deleteTask(index){

tasks.splice(index,1);

saveData();

}

function saveData(){

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}