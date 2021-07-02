
let data = [];

let containerNewItemsTable = document.getElementById("usersContainer");
let openAddUserModal = document.getElementById("openAddUserModal");
let modalWindow = document.querySelector(".modalWindow");
let crosModal = document.querySelector(".cros-modal");
let inputName = document.getElementById("inputName");
let inputLastName = document.getElementById("inputLastName");
let inputAge  = document.getElementById("inputAge");
let btnAdd = document.querySelector(".btnAdd");
let zatemnenie = document.querySelector(".temno");

!localStorage.dataObj ?  data= [] : data = JSON.parse(localStorage.getItem("dataObj"));

let createClassModalHandler = () => {
    modalWindow.classList.add("modalShow");
    zatemnenie.classList.add("temno_show");
}

let removeClassModalHandler = () => {
    modalWindow.classList.remove("modalShow");
    zatemnenie.classList.remove("temno_show");
}

openAddUserModal.addEventListener("click", createClassModalHandler );
crosModal.addEventListener("click", removeClassModalHandler );

let sendLocal = (data) => {
    localStorage.setItem("dataObj", JSON.stringify(data));
}

let addDataArray  = () => {
    let createDataNewUser = {
        firstName: inputName.value,
        lastName: inputLastName.value,
        age: inputAge.value,
    };
    
    if (createDataNewUser.firstName && createDataNewUser.lastName && createDataNewUser.age) {
        data.push(createDataNewUser)
    }
    
    addNewItems()

    sendLocal(data);
    inputName.value = "";
    inputLastName.value = "";
    inputAge.value = "";
};

let creatElements = (data , index) => {
    return `  
    <div class="users-list__header">
        <div class="title">${data.firstName}</div>
        <div class="title">${data.lastName}</div>
        <div class="title">${data.age}</div>
    </div>`
};

let addNewItems = () => {

    containerNewItemsTable.innerHTML = "";

    if (data.length > 0){
        data.forEach((item , index) => {
            return containerNewItemsTable.innerHTML += creatElements(item,index);
        }
    )};
};

addNewItems();

btnAdd.addEventListener("click" , addDataArray );








