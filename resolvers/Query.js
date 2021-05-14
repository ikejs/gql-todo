const { tasks } = require('../data');

module.exports = {
  getAllTodos() {
    return tasks;
  },
  getTodo(_, { id }) {
    const result = tasks.filter(task => {
      return task.id === id;
    });
    return result[0];
  },
  getSortedTodos(_, { completed }) {
    const results = tasks.filter(task => {
      return task.completed === completed;
    });
    return results;
  },
};
