const taskInp = document.getElementById('inp');
const add = document.getElementById('add');
const list = document.getElementById('task-list');

add.addEventListener('click', () => {
    const taskText = taskInp.value.trim();
    if (taskText === '') {
        alert('Try Again!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    list.appendChild(listItem);

    taskInp.value = '';
});