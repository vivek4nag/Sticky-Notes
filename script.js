const textInput = document.getElementById("textArea");
const bcgColor = document.getElementById("bcg-Color");
const fontColor = document.getElementById("font-Color");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const notesContainer = document.querySelector(".notes-container");
const emptyMessage = document.getElementById("empty-message")
const inputSection = document.querySelector(".input-part")
const btns = document.querySelector('.btns')
const heading = document.getElementsByTagName('h1')[0]

window.addEventListener("load", () =>{
    inputSection.classList.add('visible')
    btns.classList.add('visible')
    heading.classList.add('visible')
    emptyMessage.classList.add('visible')
})

function addNote() {
  // console.log("notes added");


  if(textInput.value.trim() === ""){
    alert("please add some notes");
    textInput.animate([
        {transform: 'translateY(4px)'},
        {transform: 'translateX(2px)'},
        {transform: 'translateY(4px)'},
        {transform: 'translateX(2px)'}
    ], {
        duration: 200,
        easing: 'ease-in-out',
        iterations: 4
    })
    return;
  }

  let stickyDiv = document.createElement("div");
  let stickyNote = document.createElement("p");
  let crossBtn = document.createElement("button");
  crossBtn.innerHTML = "X";

  stickyNote.innerText = textInput.value;
  stickyDiv.appendChild(stickyNote);
  stickyDiv.appendChild(crossBtn);
  stickyDiv.style.backgroundColor = bcgColor.value;
  stickyDiv.style.color = fontColor.value;
  stickyDiv.classList.add('sticky-div')
  notesContainer.appendChild(stickyDiv);
  emptyMessage.style.display = "none"
  textInput.value = "";

  crossBtn.addEventListener("click", ()=>{
    stickyDiv.remove();
    if(notesContainer.children.length === 0){
        emptyMessage.style.display = "block";
        emptyMessage.innerText = "You have removed all notes. Let's add new ones😊"
    }
  })
}

function clearNote(){
    // notesContainer.style.display = "none"
    if(notesContainer.children.length !== 0){
        notesContainer.innerHTML = ""
        emptyMessage.style.display = "block";
        emptyMessage.innerText = "You have removed all notes. Let's add new ones😊"

    }
}

addBtn.addEventListener("click", addNote);

clearBtn.addEventListener("click", clearNote)
