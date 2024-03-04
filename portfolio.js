let comp=document.getElementById("comp")
let edu=document.getElementById("edu")

let tab_content=document.querySelector("#competance")
let tab__content=document.querySelector("#education")
let linkedin=document.getElementById("linkedin")
let link=document.getElementById("lik")

onload=function(){
    tab__content.classList.add("hide")
    tab_content.classList.add("hide")
}

comp.onclick=function(){
    tab__content.classList.add("hide")
    tab_content.classList.remove("hide")
    
}
edu.onclick=function(){
    tab_content.classList.add("hide")
    tab__content.classList.remove("hide")
    
}

