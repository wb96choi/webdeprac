$(function(){
    $('.gnb > li').hover(function(){
        $(this).find('.sub').stop().slideDown(500);
    },function(){
        $(this).find('.sub').stop().slideUp(500);
    });
})