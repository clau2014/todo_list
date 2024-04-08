let tasks = [
    { id: 1, description: "Levantarse 06:00 Hrs", completed: true },
    { id: 2, description: "Tomar cafes en las mañanas", completed: true },
    { id: 3, description: "Realizar entrenamiento matutino", completed: false },
  ];
  
  function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <p>id: ${task.id}</p>
        <h4>Tarea:${task.description}</h4>
        <input type="checkbox" ${
          task.completed ? "checked" : ""
        } onchange="toggleTaskStatus(${task.id})">
        <span class="${task.completed ? "completed" : ""}">${
        task.completed ? "Realizado" : "Pendiente"
      }</span>
        <button onclick="deleteTask(${task.id})">Eliminar</button>
      `;
      taskList.appendChild(li);
    });
  
    updateCounters();
  }
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const description = taskInput.value.trim();
  
    if (description !== "") {
      const newTask = {
        id: tasks.length + 1,
        description: description,
        completed: false,
      };
      tasks.push(newTask);
      taskInput.value = "";
      renderTasks();
    } else {
      alert(
        "No se permiten tareas en blanco. Favor, agregar tarea valida"
      );
    }
  }
  
  function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
    renderTasks();
  }
  
  function toggleTaskStatus(taskId) {
    tasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    renderTasks();
  }
  
  function updateCounters() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
  
    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
  }
  
  renderTasks();