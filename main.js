$(document).ready(function () {
    $('iframe').on('load', function() {
        $("iframe").contents().find(".topbanner-wrapper-desktop").css("display", "none");
    }); 
});
