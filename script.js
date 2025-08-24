let Name = [];
function addName() {
    
    let inputVal = document.getElementById("name").value;
    Name.push(inputVal);
    //`<li>${element}</li>`
    Name.forEach(element => {
        document.getElementById("namesList").innerHTML += "<ul>" + element + "</ul>";
    });

}

function deleteName() {
    Name.pop();
    let remove = document.getElementById("namesList");

    remove.removeChild(remove.lastChild);
}