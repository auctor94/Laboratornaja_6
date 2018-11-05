function getName() {
      return this.name;
}

function getNumber() {
    return this.number;
}

function getAdress() {
    return this.adress;
}

function getDebt() {
    return this.debt;
}

function getDebt() {
    return this.newProperty;
}

function Phone(id,name,number,adress, debt)
{
    //this.id = id;
    this.name = name;
    this.number = number;
this.adress = adress;
this.debt = debt;
this.newProperty = newProperty;
this.getName = getName;
this.getNumber = getNumber;
this.getAdress = getAdress;
this.getDebt = getDebt;
this.getNewProperty = getNewProperty;
}
//свойство прототипа, которое будет доступно всем экземплярам
//Phone.prototype.newProperty = "False";
//сделать, чтобы вместо прототипа просто было еще одно свойство в обьекте Телефон