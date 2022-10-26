import { Todo} from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class= '${(todo.completado) ? 'completed' : ''}' data-id='${todo.id}'>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`

const div = document.createElement('div');
div.innerHTML = htmlTodo;

divTodoList.prepend(div.firstElementChild);

return div;
}

txtInput.addEventListener('keyup', (event) => {
    
    if(event.keyCode === 13 && txtInput.value.length > 0){

        const nuevoTodo = new Todo( txtInput.value);
        todoList.nuevoTodo( nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        
    }
})

divTodoList.addEventListener('click', (event) =>{
  
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    
    if (nombreElemento.includes('input')){

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
      
})