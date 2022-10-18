const content = document.querySelector(".content");

const renderTodos = (project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project");
  for (const todo of project) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo");

    const title = document.createElement("p");
    title.setAttribute("contenteditable", "true");
    title.classList.add("title");
    title.textContent = todo.title;
    todoCard.appendChild(title);

    projectCard.appendChild(todoCard);
  }
  content.appendChild(projectCard);
};

const editTodoTitle = (todo) => {
  content.addEventListener("input", (e) => {
    if (e.target.matches("p.title")){
      todo.title = e.target.textContent;
      console.log(todo);
    }
    
  });
};
export { renderTodos, editTodoTitle };
