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
        'box-sizing': 'border-box'
    })
    $("p", this).css({
        'color': '#FFFFFF'
    })
}, function () {
    $(this).css({
        'background': '',
        'opacity': '1',
        'visibility': '',
        'box-sizing': '',
        'color': ''
    })
    $("p", this).css({
        'color': ''
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

const checkBox = $(".true");
const sendForm = $(".form_input__send input")
let checkBoxEnable = 0;
$(".form_input__check--box").click(function (e) {
    e.preventDefault();
    $(checkBox).toggleClass("show");
    if (checkBox.hasClass("show")) {
        checkBoxEnable = 1;
    } else {
        checkBoxEnable = 0;
    }
});

$(sendForm).click(function (e) {

    if ((checkBoxEnable == 0) || ($("#name").val() == "") || (($("#tel").val().length != 11) && ($("#tel").val().length != 6))) {
        e.preventDefault();
        $(".form_error").addClass("show");

    } else {

    }
});

$(document).ready(function () {
    $("#tel").bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
});

$(document).ready(function () {
    $("#name").bind("change keyup input click", function () {
        if (this.value.match(/[^а-яА-Я]/g)) {
            this.value = this.value.replace(/[^а-яА-Я]/g, '');
        }
    });
});


    Set[1, 1] = 1;
    Set[2, 1] = 2;
    Set[3, 1] = 3;
    Set[4, 1] = 4;
    Set[4, 2] = 5;
    Set[4, 3] = 6;
    Set[4, 4] = 7;
    Set[3, 4] = 8;
    Set[2, 4] = 9;
    Set[1, 4] = 10;
    Set[1, 3] = 11;
    Set[1, 2] = 12;
    Set[2, 2] = 13;
    Set[3, 2] = 14;
    Set[3, 3] = 15;
    Set[2, 3] = 16;