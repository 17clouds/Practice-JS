const todoList = document.querySelector('#todo-list'); 
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler)

todoInput.focus();

function formHandler(event) {
    event.preventDefault();

    const taskText = todoInput.value;

    // Создаем тег через разметку
    // const li = `<li>${taskText}</li>`;
    // to doList.insertAdjacentHTML('beforeend', li)

    // Создаем тег с помощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    todoList.append(newTask);

    // Создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.marginLeft = '15px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function()  {
        this.closest('li').remove();
    });

    todoInput.value = '';
    todoInput.focus();
    
}