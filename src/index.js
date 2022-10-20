import { Todo, editTitle } from "../src/todo.js";
import { defaultProject } from "./project";
import { renderTodos, checkInputs } from "./ui.js";

const todo1 = Todo();
todo1.addToProject(defaultProject);

const todo2 = Todo();
todo2.addToProject(defaultProject);

const todo3 = Todo();
todo3.addToProject(defaultProject);

const todo4 = Todo();
todo4.addToProject(defaultProject);
console.log(defaultProject);

renderTodos(defaultProject);
checkInputs();
