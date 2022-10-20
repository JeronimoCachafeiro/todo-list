const Todo = () => {
  return {
    title: "Title",
    description: "",
    dueDate: "Due Date",
    priority: "",
    addToProject: function (project) {
      project.push(this);
    },
  };
}

export { Todo };
