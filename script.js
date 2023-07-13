const todoIn = document.querySelector('#todoIn');
const todoBt = document.querySelector('#todoBt');
const todoUl = document.querySelector('#todoUl');
let todo = [];

todoBt.addEventListener('click', addList);

function addList(todoTxt) {
  todoTxt = todoIn.value.trim();
  if (todoTxt !== '') {
    const todoLi = document.createElement('li');
    todoUl.appendChild(todoLi);
    todoLi.textContent = todoTxt;

    todoLi.addEventListener('click', () => todoLi.classList.toggle('done'));

    todo.push(todoTxt);
    saveLi(todo);

    const delBt = document.createElement('button');
    delBt.textContent = '⭐';
    todoLi.appendChild(delBt);
    delBt.addEventListener('click', delList);
  }
  todoIn.focus();
  todoIn.value = '';
}

function delList(e) {
  const todoLi = e.target.closest('li');
  todoLi.parentNode.removeChild(todoLi);
}

function saveLi(e) {
  localStorage.setItem('todo', JSON.stringify(e));
}

function loadLi() {
  const todoLi = localStorage.getItem('todo');
  if (todoLi) {
    localStorage.setItem('todo', JSON.parse(todoLi));
    for (let i = 0; i < todo.length; i++) {
      addList(todo[i]);
    }
  }
}

window.addEventListener('load', loadLi);
