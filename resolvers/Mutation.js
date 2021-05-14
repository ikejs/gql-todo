const { uid } = require('uid');
const { tasks } = require("../data");

module.exports = {
  addTask: (_, { name }) => {
    const task = { 
      name, 
      completed: false, 
      date: new Date(),
      id: uid(16),
    };
    tasks.push(task);
    return tasks;
  },
  completeTodo: (_, { id }) => {
    tasks.forEach((task, i) => {
      if (task.id === id) {
        tasks[i].completed = true;
      };
    });
    return tasks;
  },
};
