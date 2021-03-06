readData();

function options(){
	var select = document.getElementsByTagName("select")[0];
	window.data.forEach(phone => {
		let opt = document.createElement("option");
		opt.value = phone.getId();
		let optText = document.createTextNode(phone.getId());
		opt.appendChild(optText);
		select.appendChild(opt);
	});
};


function addOption(id) {
    var select = document.getElementsByTagName("select")[0];
    let opt = document.createElement("option");
    opt.value = id;
    let optText = document.createTextNode(id);
    opt.appendChild(optText);
    select.appendChild(opt);
}

var check = true;
function AddItem() {
    // Создаем элемент ДИВ
    if (check == true) {
        var div = document.createElement("div");
        // Добавляем HTML-контент с пом. свойства innerHTML
        div.innerHTML = "<input class=\"input-style\" type=\"text\" name=\"thirdadd\" id=\"thirsed\">";

        // Добавляем новый узел в конец списка полей
        document.getElementById("fields").appendChild(div);
        check = false;
    }
}


function addPhoneInDB() {
    let name = document.getElementById("FIO_").value;
    let phone = document.getElementById("phone_").value;
    let adress = document.getElementById("adress_").value;
    let checkboxes = document.getElementById('debt_');
    let debt;
    let property = "False";

    if (checkboxes.checked)
        debt = "Есть";
    else debt = "Отсутствует";
    console.log(name, phone, adress, property, debt);
    var element=document.getElementById('thirsed');
    if (element) {
        console.log("Блок доп свойства открыт. Проверяем значение внутри inputa");
        if (document.getElementById("thirsed").value == "") {
            console.log("Значение пустой. Заполняем свойство по умолчанию.");
            let addedPhone = new Phone(null,name, phone, adress, debt, property);
            console.log(addedPhone.toString());
            addPhone(addedPhone);
            getlastId();
        }
        else {
            console.log("Значение внутри input есть! Считываем его и заполняем свойство!");
            let fullProperty = document.getElementById("thirsed").value;
            let addedPhone = new Phone(null,name, phone, adress, debt, fullProperty);console.log(addedPhone.toString());
            addPhone(addedPhone);
            getlastId();
        }

    }
    else {
        console.log("Блок доп свойства закрыт. Заполняем свойство по умолчанию.");
        let addedPhone = new Phone(null,name, phone, adress, debt, property);console.log(addedPhone.toString());
        addPhone(addedPhone);
        getlastId();
    }
}

function remove(){
    var years=prompt('Введите id той строки, которую хотите удалить из БД',1);
	
	deletePhone(years);

}

function cleanForm() {
    myForm.FIO.value = '';
    myForm.phone.value = '';
    myForm.adress.value = '';
    myForm.debt.checked = false;
    let element=document.getElementById('thirsed');
    if (element) {
        element.value = '';
    }
}

function show(button){
	var tableDiv = document.getElementById("table");
	var table = document.getElementsByTagName("tbody")[0];
	if(tableDiv.style.display === "none"){
		tableDiv.style.display = "initial";
		button.innerHTML = "Скрыть таблицу";
		readData();		
        window.data.forEach(phone => table.appendChild(createRow(phone)));
        console.log("по сути мы должны читать readdata");
	} else{
		let rows = table.getElementsByTagName("tr");
		while(rows.length !== 1)
			table.removeChild(rows[1]);
		tableDiv.style.display = "none";
		button.innerHTML = "Показать все записи в таблице";		
	}
}

function createRow(phone){
	let row = document.createElement("tr");
	
	let cell = document.createElement("td");
	let text = document.createTextNode(phone.getId());
	cell.appendChild(text);
	row.appendChild(cell);
	
	cell = document.createElement("td");
	text = document.createTextNode(phone.getName());
	cell.appendChild(text);
	row.appendChild(cell);
	
	cell = document.createElement("td");
	text = document.createTextNode(phone.getNumber());
	cell.appendChild(text);
	row.appendChild(cell);
	
	cell = document.createElement("td");
	text = document.createTextNode(phone.getAdress());
	cell.appendChild(text);
	row.appendChild(cell);
	
	cell = document.createElement("td");
	text = document.createTextNode(phone.getDebt());
	cell.appendChild(text);
	row.appendChild(cell);
    
    cell = document.createElement("td");
    text = document.createTextNode(phone.getNewProperty());
    let a = phone.getNewProperty();
    if (a == "False")
    {
        console.log("a == False");
        let temporary = "Отсутствует";
        text = document.createTextNode(temporary);
	cell.appendChild(text);
	row.appendChild(cell);
    }
    else {
        cell.appendChild(text);
	row.appendChild(cell);
    }
	
	return row;
}

function Debeter(){
	var div = document.getElementById("haveDebt");
	if(div.innerHTML !== ""){
		div.innerHTML = "";
		return;
	}
	if(window.data.size === 0){
		div.innerHTML = "В базе данных еще нет записей";
	}else{
		for(let phone of window.data){
			if(phone.getDebt() != "Отсутствует"){
                div.innerHTML += phone.toString() + "<br>";
			}
		}
		
	}
}
/*var check1 = true;

    function AddItem1() {
        // Создаем элемент ДИВ
        if (check1==true) {
        var div = document.createElement("div");
        // Добавляем HTML-контент с пом. свойства innerHTML
        div.innerHTML = "<input class=\"input-style\" type=\"text\" name=\"thirdadd\" id=\"thirsed\">";
         
        // Добавляем новый узел в конец списка полей
        document.getElementById("dynamic").appendChild(div);
     check1 = false;    

     var valueFour = data.
     document.getElementById('thirsed').value= valueFour;
    }
       }
*/

/*
if(typeof window.DynamicTable !== 'function') {
 
    function DynamicTable(GLOB, htmlTable, config) {    
        // Так как эта функция является конструктором,
        // подразумевается, что ключевое слово this - будет
        // указывать на экземнпляр созданного объекта. Т.е. 
        // вызывать её нужно с оператором "new".
        // Проверка ниже является страховкой: 
        // если эта функция была вызвана без оператора "new",
        // то здесь эта досадная ситуация исправляется:
        if ( !(this instanceof DynamicTable) ) {
            return new DynamicTable(GLOB, htmlTable, config);   
        }
        // Зависимость:
        var DOC       = GLOB.document,
            // Ссылка на массив строк таблицы:
            tableRows = htmlTable.rows,
            // Кол-во строк таблицы:
            RLength   = tableRows.length,
            // Кол-во ячеек в таблице:
            CLength   = tableRows[0].cells.length,
            // Контейнер для работы в циклах ниже:
            inElement = null,
            // Контейнер кнопки
            // В одном из методов ниже, потребуется
            // сохранить контекст:
            self      = this,
            // Счётчики итераций:
            i,j;    
                 
        // Метод "Вставить кнопки". 
        // Создаёт/добавляет две кнопки "удалить" и "добавить"
        // завёрнутые в элемент "P". Используются DOM - методы создания 
        // и добавления элементов.
        // Метод "Добавить строку"
        this.addRow = function(ev) {
            // Кросс бр. получаем событие и цель (кнопку)
            var e         = ev||GLOB.event,
                target    = e.target||e.srcElement,
                // Получаем ссылку на строку, в которой была кнопка:
                row       = target.parentNode.parentNode.parentNode,
                // Получаем кол-во ячеек в строке:
                cellCount = row.cells.length,
                // Получаем индекс строки в которой была кнопка + 1,
                // что бы добавить строку сразу после той, в которой
                // была нажата кнопка:
                index     = row.rowIndex + 1,
                i;
            // Вставляем строку:
            htmlTable.insertRow(index);         
            // В этом цикле, вставляем ячейки.
            for(i=0; i < cellCount; i += 1) {    
                         
                htmlTable.rows[index].insertCell(i);                
                // Если ячейка последняя...
                if(i == cellCount-1) {
                    // Получаем в переменную кнопки, используя метод, описанный выше:
                    inElement = self.insertButtons();               
                } else {            
                    // Иначе получаем в переменную текстовое поле:      
                    inElement = DOC.createElement("INPUT");
                    // ... и задаём ему имя, типа name[] - которое
                    // впоследствии станет массивом.
                    inElement.name  = config[i+1]+"[]";                 
                }                   
                // Добавляем в DOM, то что получили в переменную:
                htmlTable.rows[index].cells[i].appendChild(inElement);                      
            }
            // Обнуляем переменную, т.к. 
            // она используется и в других методах.
            inElement = null;
            // Во избежании ненужных действий, при нажатии на кнопку
            // возвращаем false:
            return false;
        };
         
        // Фактически, ниже это инициализация таблицы:
        // Содержимое ячеек помещается внутрь текстовых
        // полей, а в последнюю ячейку кажой строки, помещаются
        // нопки "удалить" и "добавить" Функция является
        // "вызываемой немедленно"
        return (function() {
            // Мы имеем дело с двумерным массивом: 
            // table.rows[...].cells[...]
            // Поэетому сдесь вложенный цикл.
            // Внешний цикл "шагает" по строкам...
            for( i = 1; i < RLength; i += 1 ) {  
                // Внутренний цикл "шагает" по ячейкам: 
                for( j = 0; j < CLength; j += 1 ) { 
                    // Если ячейка последняя...
                    if( j + 1 == CLength ) {
                        // Помещаем в переменную кнопки:
                        inElement = self.insertButtons();                                       
                    } else {                    
                        // Иначе создаем текстовый элемент,
                        inElement = DOC.createElement("INPUT");
                        // Помещаем в него данные ячейки,
                        inElement.value = tableRows[i].cells[j].firstChild.data;
                        // Присваиваем имя - массив,
                        inElement.name  = config[j+1]+"[]";
                        // Удаляем, уже не нужный экземпляр данных непосредственно
                        // из самой ячейки, потому что теперь данные у нас внутри
                        // текстового поля:
                        tableRows[i].cells[j].firstChild.data = "";
                    }   
                    // Вставляем в ячейку содержимое переменной - это
                    // либо текстовое поле, либо кнопки: 
                    tableRows[i].cells[j].appendChild(inElement);
                    // Обнуляем переменную, т.к. 
                    // она используется и в других методах.
                    inElement = null;
                }       
            }
       
        }());
     
    }// end function DynamicTable
   
}*/