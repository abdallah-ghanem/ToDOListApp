const taskInput = document.getElementById('task-input');//add 3 element from html by their id
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
const taskText = taskInput.value;
if (taskText !== '') {
    const taskItem = document.createElement('li');//creat element in my html page li=list
    taskItem.classList.add('task');
    taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>`;//code html take from user task and add it to  list and make buttom to delet this list when end
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
});

taskList.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-btn')) {//function to delet this element listen when clik delet buttom
    event.target.parentElement.remove();
}
});