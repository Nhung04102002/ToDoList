let saveData = [];
let i = 0 ;
let totalTask = 0;
isAppActive = false; 

function submitForm() {
    const data = document.getElementById("task");
    if(data.value == null || data.value == '' || data.value == 0){
        isAppActive = false;
    }
    else{
        isAppActive = true;
    }
    
    if(isAppActive){
        saveData.push(data.value) ;
        data.value = '';
        
        const div = document.createElement("div");
        document.getElementById("content").appendChild(div);
        div.classList.add("divAll");

        i = i + 1;
        totalTask++;

        const button1 = document.createElement("button");
        div.appendChild(button1);
        button1.innerHTML = '<i class="fa-regular fa-square"></i>';
        button1.classList.add("button");
        button1.classList.add("tick"+i);
        button1.style.fontSize = "15px";
        
        const newdata = document.createElement("p");
        div.appendChild(newdata);
        newdata.innerHTML = saveData[saveData.length-1];
        div.classList.add("div"+i);
        newdata.classList.add("task"+i);
    
        const button2 = document.createElement("button");
        div.appendChild(button2);
        button2.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        button2.classList.add("button");
        button2.classList.add("edit"+i);
        button2.style.fontSize = "15px";
        
        const button3 = document.createElement("button");
        div.appendChild(button3);
        button3.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        button3.classList.add("button");
        button3.classList.add("cancel"+i);
        button3.style.fontSize = "15px";
        
        const myFunction1 = () => { 
            tick.disabled = true;
            task.classList.add("line");
            button1.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        }
        
        const myFunction2 = () => {
            task.classList.add("abc");
            data.value = task.innerHTML;
            enter.classList.add("hide");
            ok.classList.remove("hide");
        }
        
        const myFunction3 = () => { 
            document.getElementById("content").removeChild(A);
            let a = task.innerHTML
            for (let j = 0; j < saveData.length; j++) {
                if (a == saveData[j]){
                    saveData.splice (j, 1);
                    totalTask = totalTask - 1;
                    break;
                }
            }
        }
        
        const myFunction4 = () => {
            for (let j = 0; j < saveData.length; j++) {
                const abc = document.querySelector(".abc");
                console.log(abc);
                if (abc.innerHTML == saveData[j]) {
                    saveData[j] = data.value;
                    abc.innerHTML = saveData[j];
                    enter.classList.remove("hide");
                    ok.classList.add("hide");
                    abc.classList.remove("abc");
                    data.value = "";
                    break;
                }
            }
            isAppActive = false;
        }
        
        
        const A = document.querySelector(".div"+ i);
        const tick = document.querySelector(".tick"+i);
        const task = document.querySelector(".task"+i);
        const cancel = document.querySelector(".cancel"+i);
        const edit = document.querySelector(".edit"+i);
        const enter = document.querySelector(".enter");
        const ok = document.querySelector(".ok");
    
        cancel.addEventListener("click", myFunction3);  
        tick.addEventListener("click", myFunction1);
        edit.addEventListener("click", myFunction2);
        ok.addEventListener("click", myFunction4);
    }
}