const inputFieldEle = document.getElementById("input-field");
const ulIdEle = document.getElementById("ul-id");

function add(){
    if(inputFieldEle.value===""){
        alert("please enter something")
    }
    else{
        let liEle = document.createElement("li");
        liEle.innerText=inputFieldEle.value;
        ulIdEle.appendChild(liEle)

        let spanEle = document.createElement("span")
        spanEle.innerHTML = `<button class="btn">delete</button>`;
        liEle.appendChild(spanEle)

        saveData();
    }
    inputFieldEle.value = "";
}

ulIdEle.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("marked")
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
e.target.parentElement.parentElement.remove();
saveData();
    }
})

function saveData(){
    localStorage.setItem("data", ulIdEle.innerHTML);
}
function loadData(){
    ulIdEle.innerHTML=localStorage.getItem("data")
}
loadData();