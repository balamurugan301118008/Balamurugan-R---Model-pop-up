const btn = document.querySelector('#btn')
const closeBtn = document.querySelector("#close-btn")
const content = document.querySelector("#contents")

btn.addEventListener("click",(e)=>{
    // alert("fdasn")
    // e.target.classList.toggle("show")
    content.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    content.classList.remove("show")
})
// 































//  <------selecting all buttons---->

// const openBtnEl = document.querySelector('#btn')
// let content = document.querySelector('#contents')


// // <------adding event lisener------->

// openBtnEl.addEventListener('click', () => {
//     content.classList.add('show')
// })
// let closeBtnEl = document.querySelector('#close-btn')
// closeBtnEl.addEventListener('click', () => {
//     content.classList.remove('show')
// })











