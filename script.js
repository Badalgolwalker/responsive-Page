var menu = document.querySelector("#menu-icon")
var click = document.querySelector(".navlist")
var flag = 0
menu.addEventListener("click",function(){
    if(flag === 0){
  click.style.right = 0
  flag = 1
    }
    else{
  click.style.right = '-50%'
  flag = 0
    }

})