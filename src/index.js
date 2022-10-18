import { Todo } from "../src/todo.js";
import { defaultProject } from "./project";
import { renderTodos, editTodoTitle } from "./ui.js";

const todo1 = Todo("A title", "A description", "Tomorrow", "Top priority");
todo1.addToProject(defaultProject);

const todo2 = Todo("2 A title", "2 A description", "2 Tomorrow", "2 Top priority");
todo2.addToProject(defaultProject);

const todo3 = Todo("3 A title", "3 A description", "3 Tomorrow", "3 Top priority");
todo3.addToProject(defaultProject);

const todo4 = Todo("4 A title", "4 A description", "4 Tomorrow", "4 Top priority");
todo4.addToProject(defaultProject);
console.log(defaultProject);

renderTodos(defaultProject);
editTodoTitle(todo1);