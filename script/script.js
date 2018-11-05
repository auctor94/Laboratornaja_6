 var id = 0;
function addOption() {
    var objSel = document.getElementById('mySelectId');
let oOption = document.createElement("option");
oOption.appendChild(document.createTextNode(id.toString()));
oOption.selected = true;
objSel.appendChild(oOption);
id++;
}

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
addOption();
//let id = document.getElementById("mySelectId").options.selectedIndex;
let name = document.getElementById("FIO_").value;
let phone = document.getAnimations("phone_").value;
let adress = document.getElementById("adress_").value;
let checkboxes = document.getElementById('debt');
let debt;
if (checkboxes.checked)
debt = "Есть";
else debt = "Отсутствует";
var addedPhone = new Phone(id,name,phone,adress,debt);
addPhone(addedPhone);
}

function cleanForm() {
    myForm.FIO.value = '';
    myForm.phone.value = '';
    myForm.adress.value = '';
    myForm.debt.checked = false;
}

