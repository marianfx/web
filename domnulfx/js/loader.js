
loadData();

var pluginspreparer = function () {
    "use strict";

    var d = $(window).width();
    $(window).load(function () {
        setTimeout(function () {
            $("body").addClass("loaded");
            setTimeout(function(){
                afterLoadedDissapears();
            }, 969);
        }, 200);
    });

    $("#cpyear").text(new Date().getFullYear());

    var imagesAvailable = 5;
    var randomImageId = Math.floor(Math.random() *  imagesAvailable + 1);
    $(".banner").css("background-image", "url(img/portraits/portrait" + randomImageId +".jpeg)"); 

    // var logosAvailable = 2;
    // var randomLogoId = Math.floor(Math.random() * logosAvailable + 1);
    // $('.navbar-brand img').attr("src", "img/logos/logo" + randomLogoId + ".png");
};

function afterLoadedDissapears(){
    $("body").addClass("scrollbar");
    $("body").addClass("scyan");
    $('[data-toggle="tooltip"]').tooltip();//enable tooltips
}

$(pluginspreparer);