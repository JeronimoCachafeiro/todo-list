

const Todo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    addToProject: function (project) {
      project.push(this);
    }, 
  };
};


export { Todo };
