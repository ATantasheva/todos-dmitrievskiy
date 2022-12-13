'use strict'

//вызовем div class строим dom-дерево
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

let todos = []; // созд массив

function addTodo(text) { // функция добавления в массив 
   // на вхлд должна принимать text 
const todo = { 
   text, 
   done: false, // по умолчан не сделано
   id:`${Math.random()}` //библиотека - достает рандомное число
};
todos.push(todo); //доб в массив todos функцию


}
// функция удаления из массива
function deleteTodo(id) { // удаляем через id
todos.forEach(todo => { // пробегаемся циклом по массиву находим id
   if (todo.id === id) { // если передан id совпадает то меняем статус данных
      // с false на true
todo.done = true;
   }
})
}

//вывод в консоль для проверки
function render() {
   console.log(todos); // выводим массив

   let html = ''; //изначально пустая строка
todos.forEach(todo => { //циклом по todos
   if (todo.done) { // если сдлано - не выводить
return; // возврат к началу функции
   };
html += `
 <div class="btn">
${todo.text}
<button  data-id='${todo.id}'>Сделано</button>
</div>`
// доб див с текстом
// когда появл-ся задача появлся кнопка
// связываем через data-атрибут id конкретной задачи
})
   todosNode.innerHTML = html;// вставка в todosNode
}
 //  доб события на кнопку

 btnNode.addEventListener ('click', () => {
   const text = inputNode.value; // достаем текст из поля ввода
   addTodo(text); // вызываем addTodo и передаем туда текст
   render(); // обновляет актуальное состояние интерфейса
   
 }
 );

 // тк кнопка СДЕЛАНО создается динамически - 
 //событие на родителе todosNode - по кнопке сделано конкретной задаче 
 //присваивается статус true
 todosNode.addEventListener('click', (event) => {
   // достаем событие (event) чтобы убедиться что клик на кнопке
if(event.target.tagName !== 'BUTTON') {
   return; // если клик не на кнопке то возврат
};
const id = event.target.dataset.id; //достаем id задачи на которую кликнули
deleteTodo(id); //функция удаления
render(); // изменения в интерфейс
 });
render();