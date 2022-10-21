import { Todo } from "../src/todo.js";
import { defaultProject } from "./project";
import { renderTodos, checkInputs, checkButtons } from "./ui.js";

renderTodos(defaultProject);
checkInputs();
checkButtons();
