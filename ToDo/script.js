const task_inp = document.querySelector('#input')
function f1(event) {
   if (event.key == "Enter") {
      const task = document.createElement("li")
      // console.log(tasksArray);
      const task_board = document.querySelector(".list")
      const del = document.createElement("button")
      del.classList.add("del_button")
      // console.log(del)
      del.addEventListener("click", () => {
         task.style.display = "none"
      })
      del.innerHTML = "delete"
      task.innerHTML = task_inp.value
      task.appendChild(del)
      task_board.appendChild(task)
   }
   // console.log(event.key)
}
function f2() {

   const task = document.createElement("li")
   const task_board = document.querySelector(".list")
   const del = document.createElement("button")
   del.classList.add("del_button")
   // console.log(del)
   del.innerHTML = "delete"
   del.addEventListener("click", () => {
      // console.log("lox");
      // task.classList.add("null1")
      task.style.display = "none"
   })
   task.innerHTML = task_inp.value
   task.appendChild(del)
   task_board.appendChild(task)
   // console.log(task_inp.value)
}