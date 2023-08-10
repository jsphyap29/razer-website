window.AppName = window.AppName || {};
window.AppName.Core = window.AppName.Core || {};
window.AppName.Modules = window.AppName.Modules || {};

$(document).ready(function () {
    $('#dropdown-submenu #dropdown-toggle').on('click', function () {
        var $subMenu = $(this).next("#dropdown-menu");
        var $dropDown = $('#dropdown-submenu .show');
        $subMenu.toggleClass('show');

        $(this).parents('.nav-item').on('hidden.bs.dropdown', function () {
            $dropDown.removeClass("show");
        });

        return false;
    });
});

$(window).resize(function () {
    if ($(window).width() <= 767) {
        var $dropdownProd = $(".dropdown-products");
        var $navLink = $(".nav-link");
        var $prod = $(".products");
        var $menu = $(".menu");
        var $headAudio = $(".headset-audio");

        $("#navbardrop").click(function () {
            $navLink.hide();
            $menu.hide();
            $prod.show();
        });

        $("#dropdown-toggle").click(function () {
            $dropdownProd.hide();
            $prod.hide();
            $headAudio.show();
        });

        $prod.click(function () {
            $(this).hide();
            $navLink.show();
            $menu.show();
        });

        $headAudio.click(function () {
            $(this).hide();
            $prod.show();
            $dropdownProd.show();
        });
    }
});

new WOW().init();