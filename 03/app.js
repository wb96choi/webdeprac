// 제자리에서 슬라이드되는
$(function(){
    $('.gnb > li').hover(function(){
        $(this).find('.sub').stop().slideDown();
    },function(){
        $(this).find('.sub').stop().slideUp();
    });
});


// 오른쪽으로 나오는
// $(function(){
//     $('.gnb > li').hover(function(){
//         $(this).find('.sub').stop().show();
//     },function(){
//         $(this).find('.sub').stop().hide();
//     });
// });
