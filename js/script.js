$(document).ready(function (){
    //欢迎页面动画加载完成后显示首页
    $("#welcome").on("animationend", function () {
        $("#header").css('display','block');
        setTimeout(function (){
            var len = $(".UIUE .inner").length;
            for(let i = 0; i < len; i++){
                setTimeout(function (){
                    $(".UIUE .inner").eq(i).animate({
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
        mouseWheel(document,upFn,downFn);	//滚轮事件调用
    });

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

    var page = 0;   //初始化页码
    var prevPage = 0;
    var onChange = false;   //给页面设置状态
    //向下
    function downFn(){
        if(!onChange){
            if(page === 3)return;
            onChange = true;
            page++;
            switch (page){
                case 1 :
                    change($(".UIUE .inner"),-800,$(".ICON .inner"),0);
                    break;
                case 2 :
                    change($(".ICON .inner"),-800,$(".GRAPHIC .inner"),0);
                    break;
                case 3 :
                    change($(".GRAPHIC .inner"),-800,$(".RESUME .inner"),0);
                    break;
            }

        }
    }

    function change(ele,num,nextEle,nextNum){
        $(".image").fadeOut();
        var len = ele.length;
        for(let i = 0; i < len; i++ ) {
            setTimeout(function () {
                ele.eq(i).animate({
                    'top': num+'px'
                }, 1000);
                if(i===len-1){
                    setTimeout(function () {
                        $('.slide').eq(prevPage).css('display','none');
                        $('.slide').eq(page).css('display','block');
                        var len = nextEle.length;
                        for(let i = 0; i < len; i++){
                            setTimeout(function (){
                                nextEle.eq(i).animate({
                                    'top': nextNum+'px'
                                },1000);
                            },i*100);
                            if(i === len-1){
                                setTimeout(function (){
                                    onChange = false;
                                },1000)
                            }
                        }
                        $(".image").fadeIn();
                        prevPage = page;
                    },1000)
                }
            }, i * 100);
        }
    }

    //向上
    function upFn(){
        if(!onChange){
            if(page === 0)return;
            onChange = true;
            page--;
            console.log(page);
            switch (page){
                case 0 :
                    change($(".ICON .inner"),800,$(".UIUE .inner"),0);
                    break;
                case 1 :
                    change($(".GRAPHIC .inner"),800,$(".ICON .inner"),0);
                    break;
                case 2 :
                    change($(".RESUME .inner"),800,$(".GRAPHIC .inner"),0);
                    break;
            }
        }
    }

	//点击跳转
	
	$(document).on('click',function (e){
		var target = $(e.target).data().name;
		console.log(target);
		switch (target){
			case 'uiue':
				location.href = "./view/SportGame.html";
				break;
			case 'icon':
				location.href = "./resume.html";
				break;
			case 'graphic':
				location.href = "./resume.html";
				break;
			case 'resume':
				location.href = "./resume.html";
				break;
		}
	})



});
