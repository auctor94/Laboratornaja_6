function Phone(id, name, number, adress, debt, newProperty) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.adress = adress;
    this.debt = debt;
    this.newProperty = newProperty;
}
//свойство прототипа, которое будет доступно всем экземплярам
//Phone.prototype.newProperty = "False";
//сделать, чтобы вместо прототипа просто было еще одно свойство в обьекте Телефон
Phone.prototype.getAdress = function () {
    return this.adress;
}

Phone.prototype.getId = function () {
    return this.id;
}

Phone.prototype.getName = function () {
    return this.name;
}

Phone.prototype.getNumber = function () {
    return this.number;
}

Phone.prototype.getDebt = function () {
    return this.debt;
}

Phone.prototype.getNewProperty = function () {
    return this.newProperty;
}

Phone.prototype.setNewProperty = function (adding) {
    if (adding !== null)
        this.newProperty = adding;
}

Phone.prototype.toString = function () {
    var string = "Название: " + this.name + "<br>";
    string += "Номер: " + this.number + "<br>";
    string += "Адрес: " + this.adress + "<br>";
    string += "Задолженность: " + this.debt + "<br>";
    string += "Свойство: " + this.newProperty + "<br>";
    return string;
}