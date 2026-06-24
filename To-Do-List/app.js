let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let tasksBoxes = document.querySelectorAll(".tasks_boxes")

addBtn.addEventListener("click" , () => {
    addTask();
})


const addTask = () => {
    if(input.value != "")
    {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="tasks_boxes">
                <div class="tasks" onclick = "toggleDone(this)">${input.value}</div>
                <i class="fa-solid fa-trash" id="task_del" onclick = "delTask(this)"></i>
            </div>
        `
        document.querySelector("#taskList").appendChild(li);

        input.value = "";
    }   
}

const toggleDone = (element) => {
      element.classList.toggle("done");
}

const delTask = (i) => {
    i.parentElement.remove();
}


