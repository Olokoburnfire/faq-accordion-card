const items = document.querySelectorAll(".items")
const icons = document.querySelectorAll(".icon")

items.forEach((item)=> {
  let questions =item.firstElementChild
})

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.addEventListener('click', ()=>{
    if (item.firstElementChild.classList.contains("question_open")) {
      item.firstElementChild.classList.remove("question_open")
      item.firstElementChild.lastElementChild.classList.remove("icon_open")
      item.style.height ="40px"
    } else {
      item.firstElementChild.classList.add("question_open")
      item.firstElementChild.lastElementChild.classList.add("icon_open")
      item.style.height ="100px"
    }
    
    if (item.style.height == "100px") {
      item.lastElementChild.classList.add("answer_open")
    } else {
      item.lastElementChild.classList.remove("answer_open") 
    }
  })
}
