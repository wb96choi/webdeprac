// 배경과 함께 내려오는 메뉴
$(function(){
    $('header nav .gnb > li').hover(function(){
        $('ul.sub, .nav_bg').stop().slideDown();
    },function(){
        $('ul.sub, .nav_bg').stop().slideUp();
    });
});

// 위아래 슬라이드 
$(function(){
    var num = 0;
    function changeSlider(img_num){
        var img_height = 300 * img_num;
        $('.slide .slider').css({
            transform: `translateY(${-img_height}px)`
        });
    }
    setInterval(function(){
        num++;
        if(num > 2 ){
            num=0
        }
        changeSlider(num);
    },3000)
})