(function ($) {
    if ($(window).width() > 840) {
        $(window).scroll(function () {
            var margin = null;
            var scrollHeight = $(document).height(),
                scrollTop = $(window).scrollTop(),
                offsetBottom = 345, // Offset depending on the height of the footer
                offsetTop = 207, // Offset depending on the height of the header
                positionTop = $("#sidebar").offset().top,
                affix;
            if (margin != null && (scrollTop + margin <= positionTop)) {
                // The sidebar has reached the bottom and is still on the bottom
                affix = false;
            } else if (positionTop + $("#sidebar").height() >= scrollHeight - offsetBottom) {
                // The sidebar has reached the bottom
                affix = 'bottom';
            } else if (scrollTop <= offsetTop) {
                // The sidebar has reached the top
                affix = 'top';
            } else {
                // The sidebar is midway
                affix = false;
            }
            // If the sidebar hasnot changed his state, return;
            if ($("#sidebar").hasClass('at' + (affix ? '-' + affix : ''))) return;

            if (affix == 'bottom') {
                margin = positionTop - scrollTop;
            } else {
                margin = null;
            }
            // If the related class is added to the div
            $("#sidebar").removeClass('at at-top at-bottom').addClass('at' + (affix ? '-' + affix : ''))
        });
    }

})(jQuery);
