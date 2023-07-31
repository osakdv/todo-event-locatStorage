const TodoEntryInput = document.querySelector("#enter-todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoListUl = document.querySelector(".todo-items");

const domDisplayTodo = () => {
  const todo = TodoEntryInput.value.trim();

  if (!todo) {
    return;
  }

  const listTodoLi = document.createElement("li");
  listTodoLi.innerText = todo;

  const removeTodoXBtn = document.createElement("span");
  removeTodoXBtn.innerHTML = "\ud00d7";

  listTodoLi.appendChild(removeTodoXBtn);
  todoListUl.appendChild(listTodoLi);
  TodoEntryInput.value = "";
  saveDataLocal();git 
};

addTodoBtn.addEventListener("click", domDisplayTodo);
todoListUl.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveDataLocal();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveDataLocal();
  }
});

function saveDataLocal() {
  localStorage.setItem("data", todoListUl.innerHTML);
}

function showLocalData() {
  todoListUl.innerHTML = localStorage.getItem("data");
}

showLocalData();
