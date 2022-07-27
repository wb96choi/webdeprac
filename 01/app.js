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