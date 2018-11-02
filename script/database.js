var data = new Set();
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
                                tx.executeSql("CREATE TABLE Phone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, adress REAL, debt REAL);", [], null, null);
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
                                result.rows.item(i)['adress'], result.rows.item(i)['debt']);
            data.add(tool);
        }
        alert("finally");
    }

    function lastId(){
        var lastId = 0;
        db.transaction(function(tx){
            tx.executeSql("SELECT id FROM Phone'", [],
                            function(result){
                                if(result.rows == null || result.rows == undefined)
                                    return;
                                lastId = result.rows.item(result.rows.length - 1)['id'];
                            },
                            function(tx, error){
                                tx.executeSql("CREATE TABLE Phone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, adress REAL, debt REAL);", [], null, null);
                            }
                        );
        });
        return lastId;
    }