$(function () {

    $('.checkall').change(function () {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
    });

    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);

        }

    })

    $('.increment').click(function () {
        var n = $(this).siblings('.itxt').val()
        n++;
        $(this).siblings('.itxt').val(n)
        var p = $('.p-price').html();
        p = p.substr(1)
        var price = (p * n)
        $('.price-sum').html('￥' + price);


    });



    $('.decrement').click(function () {
        var n = $(this).siblings('.itxt').val()
        if (n == 0) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n)
        var p = $('.p-price').html();
        p = p.substr(1)
        var price = (p * n)

        $('.price-sum').html('￥' + price);

    });


    // 删除
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove()

    })




   
})