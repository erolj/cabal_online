$(document).ready(function () {
    var cnt = 0;

    var ALL_COUNT = 8;

    var height = $(".wrap_notice_list").height();
    var num = $(".notice_list li").length;
    var max = height * num;
    var move = 0;

    var pos = 0;
    var now = 0;

    var sbAllCnt = $('.sb_slider li').index();
    var sbCnt = 0;


    $('.cont_slider li').eq(0).show().siblings().hide();

    /* EastGames Navigation Bar Toogle */
    $('.toggle_1').toggle(function () {
        //t
        $(this).removeClass('off').addClass('on').find('span').text('닫기');
        $('.list_game').show();
    }, function () {
        //f
        $(this).removeClass('on').addClass('off').find('span').text('열기');
        $('.list_game').hide();
    });

    $('.toggle_2').toggle(function () {
        //t
        $(this).find('span').text('닫기');
        $('.list_center').show();
    }, function () {
        //f
        $(this).find('span').text('열기');
        $('.list_center').hide();
    });


    /* Fade Slider */
    function fade() {
        if (cnt >= 8) cnt = 0;

        $('.cont_slider li').eq(cnt).fadeIn(1000).siblings().hide();
        $('.btn_slider li').eq(cnt).addClass('on').siblings().removeClass('on');

        cnt++;
    }

    var auto = setInterval(fade, 3000);

    $('.btn_slider li a').click(function (e) {
        e.preventDefault();
        clearInterval(auto);

        cnt = $(this).parent('li').index();

        fade(cnt);

        auto = setInterval(fade, 3000)
    });


    /* Notice Rolling */
    function noticeRolling() {
        move += height;
        $(".notice_list").animate({
            "top": -move
        }, 600, function () {
            if (move >= max) {
                $(this).css("top", 0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling, 2000);
    $(".notice_list").append($(".notice_list li").first().clone());

    /* Itemshop Content Slider */
    $(".cont_item_slider").append($(".cont_item_slider ul").clone());
    //724px

    $('.btn_item_prev').click(function (e) {
        now = $('.cont_item_slider').position().left;
        e.preventDefault();

        if (now == 0) {
            pos = 1448;
            $('.cont_item_slider').stop().animate({
                'left': -pos
            }, 0, function () {
                pos = 724;
                $('.cont_item_slider').stop().animate({
                    'left': -pos
                }, 300);
            });
        } else if (now == -724) {
            pos = 0;
            $('.cont_item_slider').stop().animate({
                'left': pos
            }, 300);
        } else if (now == -1448) {
            pos = 724;
            $('.cont_item_slider').stop().animate({
                'left': -pos
            });
        }
    });

    $('.btn_item_next').click(function (e) {
        now = $('.cont_item_slider').position().left;
        e.preventDefault();

        if (now == 0) {
            pos = 724;
            $('.cont_item_slider').stop().animate({
                'left': -pos
            }, 300);
        } else if (now == -724) {
            pos = 1448;
            $('.cont_item_slider').stop().animate({
                'left': -pos
            }, 300);
        } else if (now == -1448) {
            pos = 724;
            $('.cont_item_slider').stop().animate({
                'left': 0
            }, 0, function () {

                $('.cont_item_slider').stop().animate({
                    'left': -pos
                }, 300);
            });
        }
    });

    /* Hover Tab : notice, update, article */
    $('.box_info h3').mouseenter(function () {
        $('.box_info ul').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $(this).next().addClass('on');
    });

    /* Click Tab : update, gallery, video */
    $('.box_pics h3').click(function (e) {

        e.preventDefault();

        $('.box_pics ul').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $(this).next('ul').addClass('on');
    });

    /*  Shop Banner Slider */
     $('.sb_ctrlBtn li:eq(0) a').click(function (e) {
         e.preventDefault();
         if (sbCnt == 0) sbCnt = 0;
         else {
             sbCnt--;
             $('.sb_num span').text(sbCnt + 1);
             $('.sb_slider li').removeClass('on');
             $('.sb_slider li:eq(' + sbCnt + ')').addClass('on');


         }
     });
     $('.sb_ctrlBtn li:eq(1) a').click(function (e) {
         e.preventDefault();
         if (sbCnt == 4) sbCnt = 4;
         else {
             sbCnt++;
             $('.sb_num span').text(sbCnt + 1);
             $('.sb_slider li').removeClass('on');
             $('.sb_slider li:eq(' + sbCnt + ')').addClass('on');
         }
     });

    /* PC Room Toggle */
    $('.btn_pc_toggle').click(function (e) {
        e.preventDefault();

        $('.btn_close').click(function (e) {
            e.preventDefault();
            $('.box_pcSpecial').hide();
        });

        if ($('.box_pcSpecial').css('display') == "block") {
            $('.box_pcSpecial').hide();
        } else {
            $('.box_pcSpecial').show();
        }
    });
});