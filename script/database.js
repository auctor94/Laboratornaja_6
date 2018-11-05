var data = new Set();
lastId = 0;
var db = openDatabase('my_db','1.0','Phone numbers',2*1024*1024,
 function(){ 
     console.log('БД открыта!')
    },
 function(){
console.log('новая БД!')
});

if(!db)
    alert("Не получилось соединиться с базой данных");
    
    function readData(){
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM Phone;", [],
                            saveResults,
                            function(tx, error){
                                tx.executeSql("CREATE TABLE Phone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, adress TEXT, debt TEXT, property TEXT);", [], null, null);
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
        for(var i = 0; i < result.rows.length; i++){
            let phone = new Phone(result.rows.item(i)['id'], result.rows.item(i)['name'], result.rows.item(i)['number'],
                                result.rows.item(i)['adress'], result.rows.item(i)['debt'],result.rows.item(i)['property']);
            data.add(phone);
        }
        alert("finally");
    }



    function lastId() {
        db.transaction(function(tx){
            tx.executeSql("SELECT id FROM Phone", [],
                            countLastId,
                            function(tx, error){
                                tx.executeSql("CREATE TABLE Phone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, adress TEXT, debt TEXT, property TEXT);", [], null, null);
                            }
                        );
        });
    }

function countLastId(tx, result){
	if(result.rows.length === 0 || result.rows == undefined){
		return;
	}
	window.lastId = result.rows.item(result.rows.length - 1)['id'];
	addOption(window.lastId);
}

   function addPhone(newPhone){
        db.transaction(function(tx){
            tx.executeSql("INSERT INTO Phone(name, number, adress, debt, property) VALUES(?, ?, ?, ?, ?);",
                            [newPhone.getName(), newPhone.getNumber(), newPhone.getAdress(), newPhone.getDebt(), newPhone.getNewProperty()],
                             null,null);
        });
    }
    
    function deleteTool(phoneId){
        db.transaction(function(tx){
            tx.executeSql("DELETE FROM Phone WHERE id = ?;",
                            [phoneId], null, null);
        });
    }
    