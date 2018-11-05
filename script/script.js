

var check = true;

    function AddItem() {
        // Создаем элемент ДИВ
        if (check==true) {
        var div = document.createElement("div");
        // Добавляем HTML-контент с пом. свойства innerHTML
        div.innerHTML = "<input class=\"input-style\" type=\"text\" name=\"thirdadd\" id=\"thirsed\">";
         
        // Добавляем новый узел в конец списка полей
        document.getElementById("fields").appendChild(div);
     check = false;    
    }
       }



function addPhoneInDB() {
//let id = document.getElementById("mySelectId").options.selectedIndex;
let name = document.getElementById("FIO_").value;
let phone = document.getElementById("phone_").value;
let adress = document.getElementById("adress_").value;
let checkboxes = document.getElementById('debt_');
let debt;
if (checkboxes.checked)
debt = "Есть";
else debt = "Отсутствует";
if (document.getElementById('thirdadd') != null ) {
alert("aaaaaaaaaaaaaaaaaaaa");
var addedPhone = new Phone(id,name,phone,adress,debt);
addPhone(addedPhone);}

}

function cleanForm() {
    myForm.FIO.value = '';
    myForm.phone.value = '';
    myForm.adress.value = '';
    myForm.debt.checked = false;
}

function show() {
    /*new DynamicTable( window, 
        document.getElementById("dynamic"),
        {1:"val1", 2:"val2", 3:"val3", 4:"val4"} );*/
        readData();

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