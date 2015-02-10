(function(){
		var taskStorage = getTaskStorage();
		window.addEventListener("DOMContentLoaded", init);
		function init(){
			document.getElementById("btnAddTask").addEventListener("click", onBtnAddTaskClick);
			document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
			loadTasksFromStorage();
		}
		function loadTasksFromStorage(){
			var tasks = taskStorage.getAll();
			for(var i=0;i<tasks.length;i++)
				addTaskToList(tasks[i]);
		}
		function onBtnAddTaskClick(){
			var taskName = document.getElementById("txtTask").value;
			var newTask = taskStorage.add(taskName);
			addTaskToList(newTask);
			
		}
		function addTaskToList(task){
			var newTask = document.createElement("li");
			newTask.setAttribute("task-id", task.id);
			newTask.innerHTML = task.name;
			newTask.addEventListener("click", onTaskItemClick);
			document.getElementById("olTaskList").appendChild(newTask);
		}
		function onTaskItemClick(){
			this.classList.toggle("completed");
		}
		function onBtnRemoveCompletedClick(){
			var taskItems = document.getElementById("olTaskList").children;
			for(var i= taskItems.length-1; i>=0; i--)
				if (taskItems[i].classList.contains("completed")){
					var taskId = taskItems[i].getAttribute("task-id");
					taskStorage.remove(taskId);
					taskItems[i].remove();
				}
		}
	})();