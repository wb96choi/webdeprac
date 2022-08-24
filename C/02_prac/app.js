$(function(){
    $('header nav .gnb > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('header nav .gnb > li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });
});


// // 페이드
// $(function(){
//     var num = 0;

//     function changeSlider(img_num){
        
//         $('#r_con #slide .slider div').eq(num).fadeIn(500);
//         $('#r_con #slide .slider div').eq(num - 1).fadeOut(500);
//     };
//     setInterval(function(){
//         if(num == 2){
//             num = 0;
//         } else {
//             num++;
//         };
//         changeSlider();
//     }, 3000);
// });

// 가로
$(function(){
    var num = 0;

    function changeSlider(img_num){
        var img_width = 800 * img_num;

        $('#r_con #slide .slider').css({
            transform: `translateX(${-img_width}px)`
        });
    };
    setInterval(function(){
        
        if(num == 2){
            num = 0;
        } else{
            num++;
        };
        changeSlider(num);
    }, 3000)
    
});