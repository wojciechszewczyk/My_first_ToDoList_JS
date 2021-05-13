const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const inputAdd = document.querySelector('input.add');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
    if (listItems.length === 0) {
        taskNumber.textContent = "You have nothing to do!"
    }
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + " <button>Done!</button>";
    ul.appendChild(task);
    inputAdd.value = "";
    const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);