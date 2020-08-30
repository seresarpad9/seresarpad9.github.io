let users = [
    { surename: "Berger", firstname: "Whitney", age: 29 },
    { surename: "Kiss", firstname: "Árpád", age: 23 },
    { surename: "Nagy", firstname: "Lászlő", age: 25 },
    { surename: "Koós", firstname: "Károly", age: 23 }
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr)
    };
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}