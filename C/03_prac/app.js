$(function(){
    $('.gnb > li').mouseover(function(){
        $(this).find('.sub').stop().show(500);
    });
    $('.gnb > li').mouseout(function(){
        $(this).find('.sub').stop().hide(500);
    });
});

$(function(){
    var num = 0;
    function changeSlider(img_num){
        var img_width = 800 * img_num;

        $('#slide .slider').css({
            transform : `translateX(${-img_width}px)`
        });
    };
    setInterval(function(){
        if(num == 2){
            num = 0
        }else{
            num++;
        }
        changeSlider(num);    //셋인터벌 안에다가 넣기
    },3000);
    
});