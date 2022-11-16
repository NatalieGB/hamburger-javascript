"use strict"

let navigation = document.getElementById("navigation")
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function(){
    navigation.classList.toggle("clickedNav");
    hamburger.classList.toggle("clicked-hamburger");
});

let form = document.querySelector(".form");
let clearAll = document.querySelector(".clear-button");
let ul = document.querySelector(".added-ul");
let input = document.querySelector(".input");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let inputVal = input.value;
    if(inputVal === " "){
        return;
    }
    let li = document.createElement("li");
    li.textContent = inputVal;
    ul.appendChild(li);
    input.value = " ";
    
    let removeButton = document.createElement("li");
    removeButton.classList.add("margin", "fa-solid", "fa-delete-left");

    li.appendChild(removeButton);
    removeButton.addEventListener("click", function(){
        li.remove();
    });
});

clearAll.addEventListener("click", function(){
    ul.innerHTML = " ";
});