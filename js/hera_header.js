let navTexts = document.querySelectorAll(".nav-text")
let navWrap = document.querySelector(".nav-wrap")
let header = document.querySelector(".header")

navTexts.forEach(function(navText){
  navText.addEventListener("mouseenter", function(){
    this.classList.add("is-active")
    document.body.classList.add("is-gnb-active")
    header.style.background = "transparent"
  })
  navText.addEventListener("mouseleave", function(){
    this.classList.remove("is-active")
  })
})

navWrap.addEventListener("mouseleave", function(){
  navTexts.forEach(function(navText){
    navText.classList.remove("is-active")
  });
  document.body.classList.remove("is-gnb-active")
  header.style.background = "linear-gradient(rgb(42, 42, 42), rgb(131, 131, 131), rgb(199, 199, 199), transparent)"
})

// 문제의 코드
// navTexts.forEach(function(navText){
//   navText.addEventListener("mouseenter", function(){
//     nav.classList.add("is-active")
//   })
//   navText.addEventListener("mouseleave", function(){
//     nav.classList.remove("is-active")
//   })
// })
