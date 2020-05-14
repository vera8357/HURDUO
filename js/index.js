



function open() {
    var burger = document.getElementById('burger');
    if(burger.style.display === "block"){
    	burger.style.display = "none";
    }else{
    	 burger.style.display = "block";
    }
   
}


function init() { 
	 
    var btn = document.getElementById("btn");
    btn.addEventListener('click', open, false);

   
    window.onresize = function(event) {
        var w = window.innerWidth;
        if(w > 767) {
     
            var burger = document.getElementById('burger');
            burger.style.display = "none";


        }

    }
    

}


window.addEventListener('scroll',function(){
        if( document.documentElement.scrollTop > 550 && window.innerWidth > 768){
            document.querySelector('.goods_content').style.opacity = '1';
        }else{
            document.querySelector('.goods_content').style.display = '';            
        }
        },false);
window.onload = init;