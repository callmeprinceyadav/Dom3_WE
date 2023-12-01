let myForm = document.querySelector("form")
let inpTask = document.getElementById("task")
let prioritySelect = document.getElementById("priority")
let tbody = document.querySelector("tbody")

let AllTask = [];
myForm.addEventListener("submit" , function(e)
{
    e.preventDefault();

   let Data = {
        input : inpTask.value,
        priority : prioritySelect.value,
    }    
    AllTask.push(Data);

    

    tbody.innerHTML = null
    myForm.reset()
    AllTask.map((ele) =>
    {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        console.log(ele.input)
        td1.innerText = ele.input
        td2.innerText = ele.priority
        tr.append(td1,td2);
        tbody.append(tr)

        if(ele.priority === "High"){
            td1.style.backgroundColor = "red"
            td2.style.backgroundColor = "red"
           }
           else if (ele.priority === "Low"){
            td1.style.backgroundColor = "green"
            td2.style.backgroundColor = "green"
           }

           else{
            td1.style.backgroundColor = "white"
            td2.style.backgroundColor = "white"
           }
        
    })
    
})
