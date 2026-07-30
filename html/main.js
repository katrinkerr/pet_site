const circles=document.querySelectorAll(".circle");
let selectedFriend=null;
circles.forEach(circle=>{
    circle.addEventListener("click",()=>{
        circles.forEach(c=>c.classList.remove("selected"));
        circle.classList.add("selected");
        selectedFriend=circle.dataset.friend;
    })
})