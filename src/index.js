import {Todo} from "../src/todo.js"
import { defaultProject } from "./project";

const todo = Todo("A title", "A description", "Tomorrow", "Top priority");


todo.addToProject(defaultProject);
console.log(defaultProject);
