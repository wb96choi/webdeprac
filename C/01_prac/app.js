$(function(){
    $('.gnb > li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
});

$(function(){
    var num = 0;
    function changeSlider(img_num){
        if(num == 2){
            num = 0;
        } else {
            num++;
        };
        $('#slide .slider div').eq(num).fadeIn(500);
        $('#slide .slider div').eq(num - 1).fadeOut(500);
        
    };
    setInterval(function(){
        changeSlider();
    }, 3000);
});

$(function(){
    $('#notice-btn').click(function(){
        $(this).addClass('on');
        $('#notice').addClass('on');
        $('#gallery').removeClass('on');
        $('#gallery-btn').removeClass('on');
    });
    $('#gallery-btn').click(function(){
        $(this).addClass('on');
        $('#gallery').addClass('on');
        $('#notice').removeClass('on');
        $('#notice-btn').removeClass('on');
    });
});

$(function(){
    $('#notice p:first-child').click(function(){
        $('.popup').addClass('on');
    });
    $('.popup #close').click(function(){
        $('.popup').removeClass('on');
    });
});