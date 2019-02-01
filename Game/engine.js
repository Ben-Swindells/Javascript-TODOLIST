

var items = [];

var root = document.getElementById('tasks');
var userInput;

var keyInt = 0;
var details = false;
var cool;
var mild;
var hot;
var veryhot;
var check = 0;

const taskObject = () => {
    userInput = document.getElementById('taskField').value;
    if(details == true)
    {
        var textArea = document.getElementById('delete').value;
    }
    
    var item = {
        title: userInput,
        key: keyInt++,
        text: textArea,
    }
    items.push(item);
    console.log(items);
    if(userInput <= 0)
    {
        alert("Task Field Empty");
    }
    else
    {
        processTask();
    }
}

const processTask = () => {
    for(var i = 0; i < items.length; i++)
    {
        var title = items[i].title;
        var key = items[i].key;
        var text = items[i].text;
    }
    addTask(title, key, text);
}

const addTask = (title, key, text) => {


    var outerCard = document.createElement("div"); //Card Shell
    outerCard.className = "card card-custom";
    outerCard.id = key.toString();
    root.appendChild(outerCard);

    var priorityBar = document.createElement("div");
    if(cool == true)
    {
        priorityBar.className = "cool";
    }
    else if (mild == true)
    {
        priorityBar.className = "mild";
    }
    else if (hot == true)
    {
        priorityBar.className = "hot";
    }
    else if (veryhot == true)
    {
        priorityBar.className = "veryhot";
    }
    outerCard.appendChild(priorityBar);

    var bodyCard = document.createElement("div"); //Card Body
    bodyCard.className = "card-body";
    outerCard.appendChild(bodyCard);

   
    var titleCard = document.createElement("h1"); //Card Title
    titleCard.className = "card-title";
    titleCard.innerHTML = title;
    bodyCard.appendChild(titleCard);

    var breakline = document.createElement("div"); //Card breakline
    breakline.className = "break-line";
    bodyCard.appendChild(breakline);

    if(details == true)
    {
        var textArea = document.createElement("p");
        textArea.innerHTML = text;
        bodyCard.appendChild(textArea);
    }

    var deleteBtn = document.createElement("button");
    deleteBtn.onclick = function() {var del = document.getElementById(key.toString()); del.parentNode.removeChild(del);};
    deleteBtn.className = "btn btn-outline-primary btn-custom-red"
    deleteBtn.innerHTML = "Delete Task";
    bodyCard.appendChild(deleteBtn);

}

const addText = () => {
    
    check += 1;
    if(check == 1)
    {
        details = true;
        var root = document.getElementById("add-forms");
        var text = document.createElement('textarea');
        text.className = "form-control  textarea-custom";
        text.id = "delete";
        root.appendChild(text);
    } else if(check >= 2)
    {
        var hide = document.getElementById('delete');
        hide.parentNode.removeChild(hide);
        details = false;
        check = 0;
    }

}

const priority = function() {
    const addPriorityCool = () => {
        var i = 0;
        cool = true;
        mild = false;
        hot = false;
        veryhot = false;
    }
    
    const addPriorityMild = () => {
        var i = 0;
        mild = true;
        cool = false;
        hot = false;
        veryhot = false;
    }
    const addPriorityHot = () => {
        var i = 0;
        hot = true;
        mild = false;
        cool = false;
        veryhot = false;
    }
    const addPriorityVeryHot = () => {
        var i = 0;
        veryhot = true;
        hot = false;
        mild = false;
        cool = false;
    }
    return {
        cool: addPriorityCool,
        mild: addPriorityMild,
        hot: addPriorityHot,
        veryhot: addPriorityVeryHot,
    }
}();



