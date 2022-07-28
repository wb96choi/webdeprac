$(function(){
    $('.gnb > li').hover(function(){
        // $(this).find('.sub').stop().slideDown();
        $('.sub').stop().slideDown();
    },function(){
        // $(this).find('.sub').stop().slideUp();
        $('.sub').stop().slideUp();
    });
})