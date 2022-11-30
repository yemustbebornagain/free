var editProfileWindowShow = false;
var openCardWindowShow = false;

$(document).ready(function () {
    $("#edit-profile-overlay").click(function() {
        editProfileWindowShow = !editProfileWindowShow;
        if (editProfileWindowShow) {
            $("#edit-profile").show();
        } else {
            $("#edit-profile").hide();
        }
    });
    $("#open-card-overlay,#open-card-close").click(function() {
        openCardWindowShow = !openCardWindowShow;
        if (openCardWindowShow) {
            $("#open-card").show();
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#111');
            $("#card-fullname").text(localStorage.getItem('fullname') ? localStorage.getItem('fullname') : "Peter Parker");
            $("#card-PN").text(localStorage.getItem('PN') ? localStorage.getItem('PN'): "990101-1234");
            $("#card-number").text("6032 9153 5672 0156");
        } else {
            $("#open-card").hide();
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#fff');
        }
    });
    $("#fullname").val(localStorage.getItem('fullname'));
    $("#PN").val(localStorage.getItem('PN'));
    $("#fullname").change(function() {
        localStorage.setItem('fullname', $("#fullname").val());
    });
    $("#PN").change(function() {
        localStorage.setItem('PN', $("#PN").val());
    });
    $(".card-wrapper").click(function() {
        if ($(this).css("transform")=="none"||$(this).css("transform")=="") {
            $(this).css("-webkit-transform","rotateY(180deg)");
            $(this).css("transform","rotateY(180deg)");
        } else {
            $(this).css("-webkit-transform","");
            $(this).css("transform","");
        }
    });
    $(".card-carousel").slick({
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
