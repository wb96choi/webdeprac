// 현재 하위 뎁스만 보이는 유형


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



// 전재 하위 뎁스가 다 보이는 유형

/*
$(function(){
    $('#gnb .depth1 > li').hover(
        //mouseover
        function(){
            $('#gnb .depth1 > li').find('.depth2').addClass('on');
        },
        //mouseout
        function(){
            $('#gnb .depth1 > li').find('.depth2').removeClass('on');
        }
    )
});
*/


// ---------------------------------------------------

$(function(){
    let num = 0     //이미지 번호(전역변수)
    
    function changeSlider(img_num){
        // 공식 = 높이값 * 이미지 번호
        let img_height = 300 * img_num;     

        $('.slider .sliders').css({
            transform: `translateY(${-img_height}px)`
        });
    }

//자동재생
    setInterval(function(){
        num++;
        if(num > 2){ 
            num = 0; 
        }
        changeSlider(num);
    }, 3000)
});