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
    $("#open-card-overlay").click(function() {
        openCardWindowShow = !openCardWindowShow;
        if (openCardWindowShow) {
            $("#open-card").show();
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000');
        } else {
            $("#open-card").hide();
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#fff');
        }
    });
    $("#fullname").val(Cookies.get("fullname"));
    $("#PN").val(Cookies.get("PN"));
    $("#fullname").change(function() {
        Cookies.set("fullname", $("#fullname").val());
    });
    $("#PN").change(function() {
        Cookies.set("PN", $("#PN").val());
    });
});
