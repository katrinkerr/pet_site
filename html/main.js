const circles=document.querySelectorAll(".circle");
let selectedFriend=null;
circles.forEach(circle=>{
    circle.addEventListener("click",()=>{
        circles.forEach(c=>c.classList.remove("selected"));
        circle.classList.add("selected");
        selectedFriend=circle.dataset.friend;
        openForm.disabled=false;
    })
})
document.getElementById("openForm").addEventListener("click",()=>{
    document.getElementById("petForm").style.display="block";
    form.classList.add("visible");
})

const icon=document.getElementById('menu-icon');
const menu=document.getElementById('menu')
icon.addEventListener("click",()=>{
    if(menu.style.display=="none"){
        menu.style.display="block"
    }
    else{
        menu.style.display="none"
    }})
