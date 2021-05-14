module.exports = {
  name: ({ name }) => {
    return name;
  },
  completed: ({ completed }) => {
    return completed;
  },
  date: ({ date }) => {
    return date.toDateString();
  },
  id: ({ id }) => {
    return id;
  },
};
 