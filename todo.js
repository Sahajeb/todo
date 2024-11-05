const btn=document.getElementById("btn")
 btn.addEventListener("click",function(){
     
    const item= document.getElementById("addinlist").value
    const ol= document.getElementById("ol")
   const li = document.createElement("li");
   const btn2 = document.createElement("button")
   btn2.id="btn2"
   btn2.onclick=function(){
    li.style.textDecoration="line-through";
   };
   btn2.textContent="Done"
   btn2.style.margin="10px"
    li.textContent = item;
    li.appendChild(btn2);
    li.style.fontSize="20px";
    ol.appendChild(li);
})
