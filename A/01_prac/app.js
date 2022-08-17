$(function(){
    $('nav .gnb > li').mouseenter(function(){
        $('.sub').stop().slideDown(500);
    });
    $('nav .gnb > li').mouseleave(function(){
        $('.sub').stop().slideUp(500);
    });
});

$(function(){
    $('#gallery-btn').click(function(){
        $(this).addClass('on');
        $('#notice-btn').removeClass('on')
        $('#contents .cont1 .gallery').addClass('on');
        $('#contents .cont1 .notice').addClass('on');
    });
    $('#notice-btn').click(function(){
        $(this).addClass('on');
        $('#gallery-btn').removeClass('on')
        $('#contents .cont1 .gallery').removeClass('on');
        $('#contents .cont1 .notice').removeClass('on');
    });
    
});

$(function(){
    $('#contents .cont1 .notice li:first-child').click(function(){
        $('.shadow').addClass('on')
    });
    $('.shadow .pop-up #close-btn').click(function(){
        $('.shadow').removeClass('on')
    })
})

// // 슬라이드
// $(function(){
//     let num = 0;

//     function changeSlider(img_num){
//         var img_height = 1200 * img_num;

//         $('#main-visual .slider').css({
//             transform: `translateX(${-img_height}px)` 
//         });
//     }

//     setInterval(function(){
//         num++;
//         if(num > 2){
//             num = 0;
//         }
//         changeSlider(num);
//     },3000)
// });

$(function(){
    var num = 0;
    function changeSlider(img_num) {
        var img_width = 1200 * img_num;

        $('#main-visual .slider').css({
            transform: `translateX(${-img_width}px)`
        });
    }

    setInterval(function(){
        num++;
        if(num > 2){
            num=0;
        }
        changeSlider(num);
    },3000)
})