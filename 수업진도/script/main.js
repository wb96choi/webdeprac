$(function(){
    $('#gnb .depth1 > li').hover(
        //mouseover
        function(){
            $(this).find('.depth2').addClass('on');
        },
        //mouseout
        function(){
            $(this).find('.depth2').removeClass('on');
        }
    )
});