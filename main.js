let masterToDoList = []
let action = {
}

let initialToDoList = []
let addToDo = () => {
    userInput = document.getElementById("input").value;
    
    
    let item = {
        action: userInput,
        isDone: false, 
    }
    masterToDoList.push(userInput);
    masterToDoList.sort()
    html += `<li>${userInput} <a href='#' onclick='remove(${i})'>x</a></li>\n`;
    document.getElementById("resultArea").innerHTML = html;
    console.log(masterToDoList);

    document.getElementById("input").value = ""
    
}
let removeItem = () => {

}
let updateToDoList = () => {
    for(i=0;i<masterToDoLIst.length;i++){
        ;
    }
    }

let changeTaskState = () => {

}
let remove = (item) => {

}
let toggleDown = (item) => {
    masterTodoList[i].isDone = !(masterTodoList[i].isDone)
}
let showList = (list) => {
    let message = list.map((item)=>{
//        <li>$(item.content)</li>
    })

    document.getElementById("resultArea").innerHTML = message
    
}
console.log(masterToDoList) 

let deleteAll = () => {
    document.getElementById("input").value = "";
}

let resetList = () => {

}
let renderMyList = () => {
    for(i=0;i<masterToDoList;i++){

    }
}
document.getElementById("addButton").addEventListener("click",addToDo)