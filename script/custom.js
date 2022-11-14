document.body.style.overscrollBehaviorY = 'none';

//페이지 전체 a효과 막기
/*$("a").click(function () {
  return false;
})*/    
    
    
/*AOS 플러그인 선언*/   
AOS.init({
    duration: 1000
});

   // AOS.init({
   //    offset: 200,
   //    duration: 600,
   //    easing: 'ease-in-sine',
   //    delay: 100,
   //  });
    
      
/*language 슬라이드 토글*/
$(document).ready(function(){ 
    $(".language button").click(function(){
        $(".language ul").slideToggle(500);
    });
}); 
  
    
/*메인 슬라이드*/    
var slideCount = $(".slideimg").length;
var currentIndex = 0;
var slidePosition;
    
    setInterval(function(){
        if(currentIndex < slideCount -1){
            currentIndex++;
        }else {
            currentIndex = 0;
        }
        
        slidePosition = currentIndex * (-100)+"%";
        $(".slidelist").stop().animate({left:slidePosition},600);
    },3500);
    

/*메인 슬라이드 텍스트 이펙트*/  
$(document).ready(function(){ 
    $(".slidelist .txt01").addClass('ani');
}); 
    
$(document).ready(function(){ 
    $(".slidelist .txt02").addClass('ani');
}); 
    
$(document).ready(function(){ 
    $(".slidelist .txt03").addClass('ani');
}); 

    
/*language active*/
var tabLang = $(".mobile_kor li");

    tabLang.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        
        tabLang.removeClass("active");
        target.addClass("active");
    });     

    
/*(모바일)햄버거 버튼 메뉴 클릭*/ 
    const menuTrigger = document.querySelector('.menu_btn');

    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active-1');
    });
 
    
/*(모바일)사이드 메뉴 슬라이드*/
$(function(){
    $(".menu_btn").click(function(){
        if($(".nav").hasClass('on')){
          $(".nav").removeClass('on');
        } else{
          $(".nav").addClass('on');
        }
    });
});    
    
    
/*contents03 tab메뉴 */
var tabBtn = $(".btn > ul");
var tabCont = $(".view > ul > li");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        
        tabCont.css("display","none")
        tabCont.eq(index).css("display","block")
    });
       
  
/*페이지 로드시 팝업창*/
$(document).ready(function() {
	$(".layerbg").show();
    $(".layer").show();
});     

    
/*버튼 클릭시 팝업창 사라짐*/
$(".close_btn").click(function(){
    $(".layer").hide();
    $(".layerbg").hide();
});    
$(".bottom_btn span").click(function(){
    $(".layer").hide();
    $(".layerbg").hide();
});

    
/*스크롤 애니메이션*/
 $(window).scroll(function(){
        var scroll_top = $(this).scrollTop();

        /*contents01*/
        if(scroll_top>= $('#contents01 .left_txt ul li').offset().top-$(this).height()){
           $('#contents01 .left_txt li').addClass('ani');
           $('#contents01 img').addClass('ani');
           $('.deco_box li').addClass('ani');
        }else{
            $('#contents01 .left_txt li').removeClass('ani');
            $('#contents01 img').removeClass('ani');
            $('.deco_box li').removeClass('ani');
        }
});   
    
    
/*헤더 글자색 스크롤 색상 변경*/
$(function(){
    var fixScroll = 0;
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if (scroll < 850){
            $("#header").addClass("change2");
        }
        else if (scroll >= 850 && scroll < 1730){
            $("#header").removeClass("change2");
            $("#header").addClass("change");
        }
        else if (scroll >= 1730 && scroll < 2620){
            $("#header").removeClass("change");
            $("#header").addClass("change2");
        }
        else if (scroll >= 2620 && scroll < 3530){
            $("#header").removeClass("change2");
            $("#header").addClass("change");
        }
        else if (scroll >= 3530 && scroll < 5340){
            $("#header").removeClass("change");
            $("#header").addClass("change2");
        }
        else if (scroll >= 5340){
            $("#header").removeClass("change2");
            $("#header").addClass("change");
        }
        else {
            $("#header").removeClass("change");
        }
        fixScroll = scroll;
    });
});   
    



/*반응형 설정*/
if(matchMedia("screen and (max-width: 768px)").matches){
    /*모바일 반응형 시작*/
    
    /*서브메뉴 슬라이드다운*/
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }); 
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
    
    /*로고 텍스트 컬러 변경*/
    $(function(){
        $(".menu_btn").click(function(){
            if($(".logoTxt").hasClass('on')){
              $(".logoTxt").removeClass('on');
            } else{
              $(".logoTxt").addClass('on');
            }
        });
    });
    console.log("mobile");
    
}else if(matchMedia("screen and (max-width: 992px)").matches){
    /*태블릿 반응형 시작*/ 
    
    /*서브메뉴 슬라이드다운*/
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }); 
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
    
    /*product imgSlide 좌우 이동*/
    $(document).ready(function(){
        var i = 0;
        $('.next').click(function(){
            i++;
            if(i > 2){
                i = 2;
            }
            $('.imgSlide').animate({
                left: -314 * i
            });
        });

        $('.pre').click(function(){
            i--;
            if(i < -2){
                i = -2;
            }
            $(".imgSlide").animate({
                left: -314 * i
            });
        });
    });   
    console.log("tablet");
    
}else if(matchMedia("screen and (min-width: 993px)").matches){
    /*PC형 반응형*/ 
    
    /*메뉴 슬라이드 업,다운*/ 
    $(".nav > ul > li").mouseover(function(){
        $(".nav .submenu",).stop().slideDown();
        $(".submenu_box").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function(){
        $(".nav .submenu").stop().slideUp();
        $(".submenu_box").stop().slideUp();
    });

    /*product imgSlide 좌우 이동*/
    $(document).ready(function(){
        var i = 0;
        $('.next').click(function(){
            i++;
            if(i > 2){
                i = 2;
            }
            $('.imgSlide').animate({
                left: -400 * i
            });
        });

        $('.pre').click(function(){
            i--;
            if(i < -2){
                i = -2;
            }
            $(".imgSlide").animate({
                left: -400 * i
            });
        });
    });   
    console.log("desktop");
}


    