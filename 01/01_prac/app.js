$(function(){
    $('.gnb > li').hover(function(){
        $('.sub').stop().slideDown();
    },function(){
        $('.sub ').stop().slideUp();
    })
})