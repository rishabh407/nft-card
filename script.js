const secondimage=document.querySelector(".secondimage");
const firstimage=document.querySelector(".firstimage");
secondimage.addEventListener("mouseover",()=>{
    firstimage.classList.remove("hide");    
});
secondimage.addEventListener("mouseout",()=>{
    firstimage.classList.add("hide");
    });
