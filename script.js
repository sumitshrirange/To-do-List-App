let getInput = document.querySelector("#userInput input");
let taskss = document.querySelector("#tasks")

function addText () {
    
    let addInput = getInput.value;
    
    if(getInput.value == ''){
        alert("Please write something!")
    }
    else{
        let addTask = document.createElement("section");

        let addImg = document.createElement("img");
        addImg.src = "Assets/unchecked.png";
        addTask.appendChild(addImg);
        
        let para = document.createElement("p");
        para.textContent = addInput;
        addTask.appendChild(para)
        
        let closeIcon = document.createElement("i");
        closeIcon.className = "ri-close-line";
        addTask.appendChild(closeIcon);

        taskss.appendChild(addTask);

        addTask.addEventListener("click", () => {
            if (addImg.src.match("Assets/unchecked.png")) {
                addImg.src = "Assets/checked.png";
                para.style.textDecoration = "line-through";
                para.style.opacity = .6;
                
            } else if(addImg.src.match("Assets/checked.png")) {
                addImg.src = "Assets/unchecked.png";
                para.style.textDecoration = "none";
                para.style.opacity = "initial";
                
            }
        })


        closeIcon.addEventListener("click", () => {
            addTask.style.display = "none";
        });

    }

    getInput.value = "";
        
}

getInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addText();
    }
});