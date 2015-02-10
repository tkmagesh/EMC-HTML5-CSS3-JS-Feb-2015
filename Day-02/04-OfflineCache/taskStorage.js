function getTaskStorage(){
		var storage = window.localStorage;
		return {
			add : function(taskName){
				var taskId = new Date().valueOf().toString();
				storage.setItem(taskId, taskName);
				return {id : taskId, name : taskName};
			},
			remove : function(taskId){
				storage.removeItem(taskId);
			},
			getAll : function(){
				var tasks = [];
				for(var i=0;i<storage.length;i++){
					var taskId = storage.key(i);
					var taskName = storage.getItem(taskId);
					tasks.push({id : taskId, name : taskName});
				}
				return tasks;
			}
		}
	}
