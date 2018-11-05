function Phone(id,name,number,adress, debt)
{
    this.id = id;
    this.name = name;
    this.number = number;
this.adress = adress;
this.debt = debt;
}
//свойство прототипа, которое будет доступно всем экземплярам
Phone.prototype.newProperty = "False";