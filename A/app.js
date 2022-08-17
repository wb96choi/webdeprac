// 제자리에서 하나씩 내려오는
// $(function(){
//     $('header nav .gnb > li').hover(function(){
//         $(this).find('.sub').stop().slideDown();
//     },function(){
//         $(this).find('.sub').stop().slideUp();
//     });
// });




// // 서브배경이 같이 내려오는
$(function(){
    $('header nav .gnb > li').hover(function(){
        $('ul.sub').stop().slideDown();
    },function(){
        $('ul.sub').stop().slideUp();
    });
});


// 슬라이드
$(function(){
    let num = 0;

    function changeSlider(img_num){
        var img_height = 1200 * img_num;

        $('.slide .slider').css({
            transform: `translateX(${-img_height}px)` 
        });
    }

    setInterval(function(){
        num++;
        if(num > 2){
            num = 0;
        }
        changeSlider(num);
    },3000)
});



