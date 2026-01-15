function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const del = document.createElement("span");
  del.textContent = "✖";
  del.className = "delete";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}