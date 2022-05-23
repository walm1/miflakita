    let back = document.getElementById('back')
    var prevPos = window.scrollY
    var y = window.scrollY 
    
    back.onclick = function(){
        window.location.replace("index.html")
    }
    
    window.onscroll = function onScroll(){
        var currentPos = window.scrollY
        if(prevPos > currentPos){
            document.getElementById('navbar').style.top = "0"
        } 
        else{
            document.getElementById('navbar').style.top = "-100px"
        } prevPos = currentPos
 
    }

    console.log(y)

     




