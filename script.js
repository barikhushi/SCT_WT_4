const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask(taskInput.value, taskTime.value);
  form.reset();
});

function addTask(text, time) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text} ${time ? `⏰ ${new Date(time).toLocaleString()}` : ''}</span>
    <div class="task-actions">
      <button onclick="editTask(this)">✏️</button>
      <button onclick="completeTask(this)">✅</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;
  taskList.appendChild(li);
}

function editTask(btn) {
  const li = btn.closest('li');
  const span = li.querySelector('span');
  const newText = prompt('Edit task:', span.textContent);
  if (newText) span.textContent = newText;
}

function completeTask(btn) {
  const li = btn.closest('li');
  li.classList.toggle('completed');
}

function deleteTask(btn) {
  const li = btn.closest('li');
  li.remove();
}
