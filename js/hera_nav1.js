let navTexts = document.querySelectorAll(".nav-text")
let navWrap = document.querySelector(".nav-wrap")
let header = document.querySelector(".header")

navTexts.forEach(function(navText){
  navText.addEventListener("mouseenter", function(){
    this.classList.add("is-active")
    document.body.classList.add("is-gnb-active")
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
})