var data = new Set();
db = openDatabase("Tools2", "1.0", "List of tools", 2 * 1024 * 1024);

if(!db)
	alert("Не получилось соединиться с базой данных");

function readData(){
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM Tool;", [],
						saveResults,
						function(tx, error){
							tx.executeSql("CREATE TABLE Tool (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, purpose TEXT, weight REAL, price REAL);", [], null, null);
						}
					);
	});
	return data;
}

function saveResults(tx, result){
	if(result.rows.length === 0 || result.rows == undefined){
		alert('No record');
		return;
	}
	for(var i = 0; i < result.rows.length; i ++){
		let tool = new Tool(result.rows.item(i)['id'], result.rows.item(i)['name'], result.rows.item(i)['purpose'],
							result.rows.item(i)['weight'], result.rows.item(i)['price']);
		data.add(tool);
	}
	alert("finally");
}

function lastId(){
	var lastId = 0;
	db.transaction(function(tx){
		tx.executeSql("SELECT id FROM Tool'", [],
						function(result){
							if(result.rows == null || result.rows == undefined)
								return;
							lastId = result.rows.item(result.rows.length - 1)['id'];
						},
						function(tx, error){
							tx.executeSql("CREATE TABLE Tool (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, purpose TEXT, weight REAL, price REAL);", [], null, null);
						}
					);
	});
	return lastId;
}

function addTool(newTool){
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO Tool(name, purpose, weight, price) VALUES(?, ?, ?, ?);",
						[newTool.getName(), newTool.getPurpose(), newTool.getWeight(), newTool.getPrice()], 
						function(tx, result){
							alert("Yes!");
						}, 
						function(error){
							alert(error.message);
						});
	});
}

function deleteTool(toolId){
	db.transaction(function(tx){
		tx.executeSql("DELETE FROM Tool WHERE id = ?;",
						[toolId], null, null);
	});
}
