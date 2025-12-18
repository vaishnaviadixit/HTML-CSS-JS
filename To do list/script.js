let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filterType = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function filterTasks(type) {
  filterType = type;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (
      (filterType === "completed" && !task.completed) ||
      (filterType === "pending" && task.completed)
    ) return;

    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.onclick = () => toggleTask(index);

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

renderTasks();
