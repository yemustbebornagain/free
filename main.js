$(document).ready(function () {
    $('iframe').on('load', function() {
        $('iframe').contents().find("head").append("<style>.topbanner-wrapper-desktop{display:none;}</style>");
    }); 
});
