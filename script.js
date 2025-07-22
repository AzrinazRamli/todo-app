let tasks = [];

window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    done: false,
  };

  tasks.push(task);
  input.value = "";

  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    // Toggle done on click
    li.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    });

    // Right-click to delete
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const stored = localStorage.getItem("todo-tasks");
  if (stored) {
    tasks = JSON.parse(stored);
  }
  renderTasks();
}
