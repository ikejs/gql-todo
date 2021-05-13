const { tasks } = require("../data");

module.exports = {
  addTask: (_, { name }) => {
    const task = { name, completed: false };
    tasks.push(task);
    return tasks;
  },
};
