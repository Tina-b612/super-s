$(document).ready(function (){
	$(".wusiyuan").one('animationend',function (){
		var wel = document.getElementById("welcome")
		mouseWheel(wel,upFn,downFn);
	})
	
	function downFn(){
		$("#welcome").animate({
			'top':'-100%'
		},1500,function (){
			console.log("over")
			$("#header").css({
				'display':'block'
			});
			$("#resume").css({
				'display':'block'
			})
		})
	}
	function upFn(){
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function mouseWheel(element,upFn,downFn){
        element.onmousewheel = wheelFn;
        if( element.addEventListener ){
            element.addEventListener("DOMMouseScroll",wheelFn,false);
        }

        function wheelFn(ev){
            var direction = true;
            if(ev.wheelDelta){  //ie和chrome
                direction = ev.wheelDelta > 0 ? true : false;
            }else if(ev.detail){ //FF
                direction = ev.detail < 0 ? true : false;
            }

            if( direction ){  //向上
                typeof upFn === "function" && upFn();
            }else{  //向下
                typeof downFn === "function" && downFn();
            }
            ev.preventDefault();
        }
    }
});
