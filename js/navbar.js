var prevScrollpos = window.scrollY
window.onscroll = function(){
var currentPos = window.scrollY
if(prevScrollpos > currentPos){
    document.getElementById('navbar').style.top = "0";    
} else{
    document.getElementById('navbar').style.top = "-100px"
} prevScrollpos = currentPos
}
