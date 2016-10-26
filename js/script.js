$(document).ready(function (){
    //欢迎页面动画加载完成后显示首页
    $("#welcome").on("animationend", function () {
        $("#header").css('display','block');
        setTimeout(function (){
            var len = $(".letter").length;
            for(let i = 0; i < len; i++){
                setTimeout(function (){
                    $(".inner").eq(i).animate({
                        'top':'0'
                    },1000);
                },i*100);
            }
            $(".image").css('display','block');
        },1000);
    });

    //阴影图片的鼠标跟随效果
	$(".img-wrapper").on("mousemove",function (e){
		var x = e.clientX;	//鼠标在窗口的坐标值
		var y = e.clientY;
        var W = ($(window).width())/2;	//窗口宽高的一半
        var H = ($(window).height())/2;
        var rotX = (x - W)/W/2*10;	//求出偏移角度
        var rotY = (y - H)/H/2*10;
		$(".img-wrapper").css("transform","rotateX("+rotY+"deg) rotateY("+rotX+"deg) translateZ(0px)");
	});

    //切换效果
    $(".tips-inner").eq(0).on("animationend",function (){
        console.log(1235);
        mouseWheel(document,upFn,downFn);	//滚轮事件调用
    });

    console.log($(".uiue .letter"));
    //滚轮事件函数
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
    var page = 0;
    var onChange = false;
    function downFn(){
        if(!onChange){
            onChange = true;
            page++;
            console.log(page);
            switch (page){
                case 1 :
                    $(".image").fadeOut();
                    var len = $(".uiue .letter").length;
                    for(let i = 0; i < len; i++ ) {
                        setTimeout(function () {
                            $(".uiue .letter").eq(i).animate({
                                'top': '-800px'
                            }, 1000);
                            if(i===len-1){
                                onChange = false;
                            }
                        }, i * 100);
                    }
                break;
            }
        }


    }
    function upFn(){
        page--;
        console.log(page);
        console.log("up");
        $(".image").fadeIn();
        var len = $(".letter").length;
        for(let i = 0; i < len; i++ ){
            setTimeout(function () {
                $(".letter").eq(i).animate({
                    'top':'0'
                },1000);
            },i*50);
        }
    }

});
