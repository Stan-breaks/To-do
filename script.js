document.addEventListener("DOMContentLoaded", ()=> {
    var addBtn=document.getElementById("add");
    var tasks=document.getElementById("center-task");
    var form=document.getElementById("myForm");
    addBtn.addEventListener("click",()=>{
     form.style.display="block";
    });
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        var taskInput=document.getElementById("taskInput");
       if(taskInput.value!=""){
        var taskElement=document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML+=`<div>${taskInput.value}</div>
        <button class="mark">Mark as Complete</button><button class="delete">Remove task</button>`;
        tasks.appendChild(taskElement);
       }
        form.style.display="none";
    });
    tasks.addEventListener("click",(event)=>{
       if(event.target.classList.contains("mark")){
        var task=event.target.previousElementSibling;
        task.classList.toggle("completed");
       }
       else if(event.target.classList.contains("delete")){
        var task =event.target.parentNode;
        tasks.removeChild(task);
       } 
  });
});
