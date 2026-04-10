const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.json({ error: "Title required" });
  }

  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);
  res.json(newTask);
});

// PATCH (mark complete)
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.json({ error: "Task not found" });
  }

  task.completed = !task.completed;
  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
