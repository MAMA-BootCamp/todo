let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let con = document.querySelector('.con')
let tasks = []
btn.addEventListener('click', click)

function click(e) {
  e.preventDefault()

  let task = document.createElement('p')
  con.appendChild(task)
  task.textContent = inp.value
  tasks.push(inp.value)
  localStorage.setItem('key', JSON.stringify(tasks))
}

document.addEventListener('DOMContentLoaded', onload)
function onload() {
  let data = JSON.parse(localStorage.getItem('key'))
  data.forEach((ele) => {
    let task = document.createElement('p')
    con.appendChild(task)
    task.textContent = ele
  })
}
