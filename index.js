let id = 0;

// TO ADD NEW TASK
document.getElementById("add").addEventListener("click", () => {
    let createdDate = new Date();
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-task").value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById("new-start-date").value;
    row.insertCell(3).innerHTML = document.getElementById("new-due-date").value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById("new-task").value = "";
});

// BUTTON TO DELETE TASK
function createDeleteButton(id) {
    let btn = document.createElement("button");
    btn.className = "btn btn-info";
    btn.id = id;
    btn.innerHTML = "Complete!";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`)
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
