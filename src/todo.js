const Todo = () => {
  return {
    title: "Title",
    description: "",
    dueDate: "",
    priority: "",
    addToProject: function (project) {
      project.push(this);
    },
    editTitle: function () {
      this.title.addEventListener("input", function() {
        (e.target.matches("p.title")) ? this.title = e.target.textContent;
          console.log(this);
          console.log(e);
        }
      }
    } 
  };

let editTitle = Todo.editTitle.bind(Todo);

export { Todo, editTitle };
