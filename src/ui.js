const content = document.querySelector(".content");

const renderTodos = (project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project");
  for (const todo of project) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = todo.title;
    todoCard.appendChild(title);

    projectCard.appendChild(todoCard);
  }
  content.appendChild(projectCard);
};

export { renderTodos };
