$(function(){
    $('.gnb  li').hover(function(){
        $('.nav_bg, .sub').stop().slideDown();
    })
    $('.gnb  li').mouseout(function(){
        $('.nav_bg, .sub').stop().slideUp();
    })
});

$(function(){
    var num = 0;
    function changeSlider(img_num){
        var img_height = 300 * img_num;
        $('#slide .slider').css({
            transform: `translateY(${-img_height}px)`
        });
    };

    setInterval(function(){
        num++;
        if(num > 2){
            num = 0;
        }
        changeSlider(num);
    },3000)
});

$(function(){
    $('#contents .notice article p:first-child').click(function(){
        $('.pop-up').addClass('on');
    });
    $('.pop-up #close-btn').click(function(){
        $('.pop-up').removeClass('on');
    })
});