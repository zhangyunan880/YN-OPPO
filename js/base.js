window.onload = function () {

    // 导航
    layui.use(['jquery', 'element', 'carousel'], function () {
        var $ = layui.jquery
            , element = layui.element
            , carousel = layui.carousel


        $(window).scroll(function () {
            var scr = $(document).scrollTop();
            scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
        });



        var btn = $('.nav').find('.nav-list').children('button')
            , spa = btn.children('span')
            , ul = $('.nav').find('.nav-list').children('.layui-nav');
        btn.on('click', function () {
            if (!$(spa[0]).hasClass('spa1')) {
                spa[0].className = 'spa1';
                spa[1].style.display = 'none';
                spa[2].className = 'spa3';
                $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
            } else {
                spa[0].className = '';
                spa[1].style.display = 'block';
                spa[2].className = '';
                $('.nav')[0].style.height = 80 + 'px';
            }
        });
    });

    // 轮播1
    var swiper1 = new Swiper('.swiper1', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swp1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    // 轮播2
    var swiper2 = new Swiper({
        el: '.swiper2',
        initialSlide: 2,
        spaceBetween: 50,
        slidesPerView: 2,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: {
            enabled: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            // el: '.swiper-pagination',
            el: '.swp2'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // 回到顶部
    $('#goTop').on('click', function () {
        $('html').animate({
            scrollTop: "0px",

        }, 'slow')
    })

    //弹窗
    $(document).click(function () {
        $('.zx').hide()
    })
    $('#kf').click(function (e) {
        e.stopPropagation();  //阻止冒泡

    })
    $('#kf').click(function () {
        $('.zx').show()
    })

    //搜索弹窗
    $(document).click(function () {
        $('.hide').hide()
        $('.nav').css('background', '')
    })
    $('#cs').click(function (e) {
        e.stopPropagation();  //阻止冒泡

    })
    $('.ipt').click(function (e) {
        e.stopPropagation();  //阻止冒泡

    })

    $('#cs').on('click', function () {
        $('.hide').show()
        $('.nav').css('background', 'rgba(0, 0, 0, 0.3)')
    })

    //手机列表
    $(document).click(function () {
        $('.nav-bar-list').slideUp()
    })
    $('#phone').click(function (e) {
        e.stopPropagation();  //阻止冒泡

    })
    $('#phone').click(function () {
        $('.nav-bar-list').slideDown()
    })



    $(document).click(function () {
        $('.login').hide()
    })
    $('#dl').click(function (e) {
        e.stopPropagation();
    })
    $('#dl').click(function () {
        $('.login').show()

    })

}












