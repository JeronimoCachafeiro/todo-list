import { Todo } from "../src/todo.js";
import { defaultProject } from "./project";

const content = document.querySelector(".content");

const renderTodos = (project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project");
  for (const [index, todo] of project.entries()) {
    const todoCard = document.createElement("div");
    todoCard.setAttribute("data-index", index);
    todoCard.classList.add("todo");

    const title = document.createElement("p");
    title.setAttribute("contenteditable", "true");
    title.classList.add("title");
    title.textContent = todo.title;
    todoCard.appendChild(title);

    const dueDate = document.createElement("p");
    dueDate.setAttribute("contenteditable", "true");
    dueDate.classList.add("dueDate");
    dueDate.textContent = todo.dueDate;
    todoCard.appendChild(dueDate);

    projectCard.appendChild(todoCard);
  }

  content.appendChild(projectCard);
};

const checkInputs = function () {
  content.addEventListener("input", (e) => {
    console.log("miauy");
    const i = e.target.parentElement.dataset.index;
    const targetKey = e.target.className;
    console.log(e);
    defaultProject[i][targetKey] = e.target.textContent;
  });
};

export { renderTodos, checkInputs };
