function onlyABC(e) {
    $(document).ready(function () {
        $(e).bind("change keyup input click", function () {
            if (this.value.match(/[^а-яА-Я]/g)) {
                this.value = this.value.replace(/[^а-яА-Я]/g, '');
            }
        });
    });
}

function onlyNUM(e) {
    $(document).ready(function () {
        $(e).bind("change keyup input click", function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
    });
}

//joulice_button
const jalousie_button = $(".jalousie_button")
const jalousieButton = $(".jalousie-button")
$(jalousie_button).hover(function (e) {
    $(this).css({
        'border': '2px solid #FFFFFF',
        'border-radius': '0'
    });

}, function () {
    $(this).css({
        'border': '',
        'border-radius': ''
    });
});

$(jalousieButton).hover(function (e) {
    $(this).css({
        'border': '2px solid #FFFFFF',
        'border-radius': '0'
    });

}, function () {
    $(this).css({
        'border': '',
        'border-radius': ''
    });
});

//
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

//scroll_to
$(nav_button[0]).click(function () {
    scrollTo(".about");
});
$(nav_button[4]).click(function () {
    scrollTo(".about");
});
//
$(nav_button[1]).click(function () {
    scrollTo(".suggestions ");
});
$(nav_button[5]).click(function () {
    scrollTo(".suggestions ");
});
//
$(nav_button[2]).click(function () {
    scrollTo(".benefist");
});
$(nav_button[6]).click(function () {
    scrollTo(".benefist");
});
//
$(nav_button[3]).click(function () {
    scrollTo(".feedback");
});
$(nav_button[7]).click(function () {
    scrollTo(".feedback");
});


function scrollTo(params) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(params).offset().top
    }, 1000);
}

$(".header_mobile__open--block").click(function () {
    $(".header_mobile__open").css({
        'opacity': '',
        'transition': '1s',
        'visibility': ''
    });
});
//
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
$(".form_input__check").click(function (e) {
    e.preventDefault();
    $(checkBox).toggleClass("show");
    if (checkBox.hasClass("show")) {
        checkBoxEnable = 1;
    } else {
        checkBoxEnable = 0;
    }
});

$(sendForm).click(function (e) {

    if ((checkBoxEnable == 0) || ($("#name").val() == "") || (($("#tel").val().length != 11))) {
        e.preventDefault();
        $(".form_error").addClass("show");

    } else {
        e.preventDefault();
        $("#tel").val("");
        $("#name").val("");
        checkBoxEnable = 0;
        $(checkBox).toggleClass("show")
        $(".form_error").removeClass("show");
    }
});

onlyABC("#name");
onlyNUM("#tel");
//feedback
const checkBox_1 = $(".true_1");
const sendForm_1 = $(".form_inputfeedback__send--feedback input")
let checkBoxEnable_1 = 0;

function checkOff() {
    $("#tel_1").val("");
    $("#name_1").val("");
    checkBoxEnable_1 = 0;
    $(checkBox_1).removeClass("show")
    $(".form_error__feedback").removeClass("show");
    $('.feedback_box').css({
        'display': ''
    });
}
$(".form_inputfeedback__check--feedback").click(function (e) {

    $(checkBox_1).toggleClass("show");
    if (checkBox_1.hasClass("show")) {
        checkBoxEnable_1 = 1;
    } else {
        checkBoxEnable_1 = 0;
    }
});

$(sendForm_1).click(function (e) {

    if ((checkBoxEnable_1 == 0) || ($("#name_1").val() == "") || ($("#tel_1").val().length != 11)) {
        e.preventDefault();
        $(".form_error__feedback").addClass("show");

    } else {
        e.preventDefault();
        checkOff()

    }
});


onlyABC("#name_1");
onlyNUM("#tel_1");
//

//Вызов feedback
$(jalousie_button).click(function (e) {
    $('.feedback_box').css({
        'display': 'flex'
    });
    $('body').css({
        'overflow-y': 'hidden'
    });
});

$('.form_close').click(function (e) {
    $('.feedback_box').css({
        'display': ''
    });
    $('body').css({
        'overflow-y': 'visible'
    });
    checkOff()
});
$('.feedback_box').click(function (e) {
    if (!$('.form_feedback').is(e.target) && $('.form_feedback').has(e.target).length === 0) {
        $('.feedback_box').css({
            'display': ''
        });
        $('body').css({
            'overflow-y': 'visible'
        });
        checkOff()
    }

});
//

//suggestions_top__button
const instVk = $(".suggestions_top__button");
$(instVk).hover(function () {
    // over
    $(this).css({
        "filter": "invert(100%)"
    });
}, function () {
    $(this).css({
        "filter": ""
    });
});
//

//feedback
const checkFeedback = $(".check-feedback");
const jackdawActive = $(".jackdaw-active");
let feedbackCheck = false;
$(checkFeedback).click(function (e) {
    e.preventDefault();
    $(jackdawActive).toggleClass("jackdaw-active__show");
    if ($(jackdawActive).hasClass("jackdaw-active__show")) {
        feedbackCheck = true;
    } else {
        feedbackCheck = false;
    }
});

const feedbackButton = $(".feedback-button");
const itemFeedback__name = $(".item-feedback__name");
const itemFeedback__phone = $(".item-feedback__phone");
const itemFeedback__mail = $(".item-feedback__mail");
const feedbackError = $(".feedback__error");


onlyABC(itemFeedback__name);
onlyNUM(itemFeedback__phone);


$(feedbackButton).click(function (e) {
    e.preventDefault();
    if ((feedbackCheck == false) || (itemFeedback__name.val() == "") || ((itemFeedback__phone.val().length != 11)) || (itemFeedback__mail.val() == "")) {
        $(feedbackError).addClass("jackdaw-active__show");
    } else {
        $(jackdawActive).removeClass("jackdaw-active__show");
        $(itemFeedback__name).val("");
        $(itemFeedback__phone).val("");
        $(itemFeedback__mail).val("");
        $(feedbackError).removeClass("jackdaw-active__show");
    }
});
//