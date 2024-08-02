let data = [
    {id: 1, name: "Rad5-test", email: "Rad5@gmail.com"},
    {id: 2, name: "Emeka-test", email: "emeka@gmail.com"}
]

function initializeLocalStorage() {

    if (!localStorage.getItem("object")) {
    
        localStorage.setItem("object", JSON.stringify(data));
    } else {

        data = JSON.parse(localStorage.getItem("object"));
    }
}

function loadData() {
    var tableData = document.querySelector(".data-table");

    var object = localStorage.getItem('object');
    var objectData = JSON.parse(object);
    var elements = "";

    objectData.map(record => {
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button class="edit" onclick="edit(${record.id})">Edit</button>
        <button class="delete" onclick="delet(${record.id})">Delete</button>
        </td>
        </tr>`
    })

    tableData.innerHTML = elements;
}

function delet(id) {
    data = data.filter(rec => rec.id !== id);
    localStorage.setItem("object", JSON.stringify(data));
    loadData();
}

function create() {
    document.querySelector(".createForm").style.display = "block";
    document.querySelector(".addDiv").style.display = "none";
}

function add() {
    var name = document.querySelector(".name").value.trim();
    var email = document.querySelector(".email").value.trim();

    if (name === "" || email === "") {
        alert("Name and email cannot be empty.");
        return;
    }

    var newObj = {id: data.length + 1, name: name, email: email};
    data.push(newObj);

    localStorage.setItem("object", JSON.stringify(data));

    document.querySelector(".createForm").style.display = "none";
    document.querySelector(".addDiv").style.display = "block";

    readAll();
}

function edit(id) {
    document.querySelector(".createForm").style.display = "none";
    document.querySelector(".updateForm").style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector(".id").value = obj.id;
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
}

function update() {
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, email};

    localStorage.setItem("object", JSON.stringify(data));

    document.querySelector(".updateForm").style.display = "none";
    document.querySelector(".addDiv").style.display = "block";

    loadData();
}

initializeLocalStorage();

loadData();

















































//     let data = [
//         // {id: 1, name: "Rad5-test", email: "Rad5@gmail.com"},
//         // {id: 2, name: "Emeka-test", email: "emeka@gmail.com"}
//     ]

//     function readAll() {
//         localStorage.setItem("object", JSON.stringify(data));
//         var tableData = document.querySelector(".data-table");

//         var object = localStorage.getItem('object');
//         var objectData = JSON.parse(object);
//         var elements = "";

//         objectData.map(record => {
//             elements += `<tr>
//             <td>${record.name}</td>
//             <td>${record.email}</td>
//             <td>
//             <button class="edit" onclick="{edit(${record.id})}">Edit</button>
//             <button class="delete" onclick="{delet(${record.id})}">Delete</button>
//             </td>
//             </tr>`
//         })

//         tableData.innerHTML = elements;

//     }
// function delet(id) {
//    data = data.filter(rec => rec.id !== id);
//     readAll()
// }

//     function create() {
//      document.querySelector(".createForm").style.display = "block";
//      document.querySelector(".addDiv").style.display = "none";
//     }

// function add() {
//     const users = JSON.parse(localStorage.getItem('object'));
//     var name = document.querySelector(".name").value;
//     var email = document.querySelector(".email").value;

//     var newObj = {id: 3, name: name, email: email};
//     data.push(newObj);

//     document.querySelector(".createForm").style.display = "none";
//     document.querySelector(".addDiv").style.display = "block";

// readAll()
 
// }

// function edit(id){
//     document.querySelector(".createForm").style.display = "none"
//     document.querySelector(".updateForm").style.display = "block";
//     // document.querySelector(".addDiv").style.display = "none";
//     var obj = data.find(rec => rec.id === id);
//     document.querySelector(".id").value = obj.id;
//     document.querySelector(".uname").value = obj.name;
//     document.querySelector(".uemail").value = obj.email;

// }

// function update(){
//     var id = parseInt(document.querySelector(".id").value)
//     var name = document.querySelector(".uname").value;
//     var email = document.querySelector(".uemail").value;

//     var index = data.findIndex(rec => rec.id === id);
//     data[index] =  {id, name, email};

//     document.querySelector(".updateForm").style.display = "none";

//     readAll();
// }




    // let users = [
    //     { name: 'John', age: 25, occupation: 'gardener' },
    //     { name: 'Lenny', age: 51, occupation: 'programmer' },
    //     { name: 'Andrew', age: 43, occupation: 'teacher' },
    //     { name: 'Peter', age: 81, occupation: 'teacher' },
    //     { name: 'Anna', age: 47, occupation: 'programmer' },
    //     { name: 'Albert', age: 76, occupation: 'programmer' },
    // ]

    // let filteredUsers = users.filter((user) => {
    //     return user.age > 40 && user.occupation === "programmer"
    // });
    
    // console.log(filteredUsers)