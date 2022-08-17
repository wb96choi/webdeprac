// 메뉴호버슬라이드
$(function(){
    $('header nav .gnb > li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('header nav .gnb > li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
});

// 페이드 슬라이드
$(function(){
    var num = 0;
    function changeSlider(img_num){
        if(num==2){
            num=0;
        }else{
            num++;
        }
        $('#slide .slider .slider-img').eq(num).fadeIn(500);
        $('#slide .slider .slider-img').eq(num-1).fadeOut(500);
    };
    setInterval(function(){
        changeSlider();
    }, 3000)
});