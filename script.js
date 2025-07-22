function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Click to mark as done
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });
  
    // Right-click to remove
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      li.remove();
    });
  
    document.getElementById("taskList").appendChild(li);
    input.value = ""; // Clear input
  }
  