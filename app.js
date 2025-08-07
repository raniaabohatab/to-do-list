document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  });
  