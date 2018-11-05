
function addOption(oListbox) {
    var objSel = document.getElementById(oListbox);
    static var id = 0;
let oOption = document.createElement("option");
oOption.appendChild(document.createTextNode(id.toString()));
oListbox.appendChild(oOption);
id++;
}

