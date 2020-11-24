const nav_button = $(".nav_block");

$(nav_button).hover(
    function () {
        $(this).css({
            'background': '#2A2A2A',
            'opacity': '1',
            'visibility': 'visible',
            'transition': '1s',
            'border': '0.1px solid #DDDDDD',
            'box-sizing': 'border-box',

        })
    },
    function () {
        $(this).css({
            'background': '',
            'opacity': '1',
            'visibility': '',
            'transition': '1s',
            'border': '0.1px solid #333333',
            'box-sizing': ''
        })
    })