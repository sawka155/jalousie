const nav_button = $(".nav_block");
const header_right_button = $(".header_top__right");
const header_mobile__toggle = $(".header_mobile__toggle img");
const header_mobile__open = $('.header_mobile__open');
$(nav_button).hover(function () {
    $(this).css({
        'background': '#2A2A2A',
        'opacity': '1',
        'visibility': 'visible',
        'transition': '0.5s',
        'border': '0.1px solid #DDDDDD',
        'box-sizing': 'border-box',
    })
}, function () {
    $(this).css({
        'background': '',
        'opacity': '1',
        'visibility': '',
        'border': '0.1px solid #333333',
        'box-sizing': ''
    })
})

$(nav_button).mousedown(function (e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});
$(header_right_button).mousedown(function (e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});




$(header_mobile__toggle).click(function (e) {
    var close = $('.header_mobile__open').css('opacity');
    if (close == '1') {
        $('.header_mobile__open').css({
            'opacity': '',
            'transition': '1s',
            'visibility': ''
        })
    } else {
        $('.header_mobile__open').css({
            'opacity': '1',
            'transition': '0.5s',
            'visibility': 'visible'
        })
    }
    $("*").mousedown(function (e) {
        if ($(".header_mobile__open").has(e.target).length === 0) {
            $(".header_mobile__open").css({
                'opacity': '',
                'transition': '1s',
                'visibility': ''
            });
        }
    });
});