$(document).ready(function () {
    // $("#Onayla").click(function () { 
    //     $("ul a:first-child").hide();
    //     // $("article input[value='Onayla']").hide();
    //     $(":submit").hide();
    //     $("li:even").css("background-color","red");
    //     $("li:odd").css("background-color","blue");
    // });
    $("#Onayla").on({
        mouseenter: function () {
            $(this).css("background-color", "red");
        },
        mouseleave: function () {
            $(this).css("background-color", "white");
        },
        click: function () {
            $("li:even").fadeOut("slow",function() {
                $(this).fadeIn(2000);
            });
            // $('[id="icon"]').hide("slow");
            $("[id = 'icon']").fadeOut(2000,function() {
                $(this).fadeIn(2000);
            });

        }

    });
    $("#goster").on({
        click: function () {
            $("li:even").show("slow");
            // $("[id='icon']").fadeIn(2000);
            
        },
    });
    $("#toggle").on({
        click: function () {
            $('[id = "icon"]').toggle("slow");
        }
    });
    $("#kaydir").on({
        click: function () {
            $("html, article").animate({ scrollTop: "300px" }, 1000,function () { 
                alert("bşarılı")
             });

        }
    });
    $("#Onayla").trigger("click",function() {
        // $("#kaydir").trigger("click");
    });
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 0) {
            $("#myBtn").fadeIn(1000);
        }
        else{
            $("#myBtn").fadeOut(1000);
        }
    });
    $("#myBtn").click(function () { 
        $("html, body").animate({ scrollTop: "0" }, 400);
        
    });
    // $("#btnSide").click(function () { 
    //     $("#menu").css("display","none");
    // });
    $("#btnSide").on({
        click:function() {
            // $("#menu").css("display","none");
            // $("#menu").slideToggle("slow");
            $("#menu").animate({width : 'toggle'},2000);
        }
    });
    $("#stop").click(function () { 
            $("#menu").stop();
    });
});
// window.onscroll = function() {scrollFunction()};
// function scrollFunction(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         $("#myBtn").css("display","block");
//     }
//     else{
//         $("#myBtn").css("display","none");
//     }
// }
// function topFunction(){
//     // document.body.scrollTop = 0;
//     // document.documentElement.scrollTop = 0;
//     $("html, article").animate({ scrollTop: "0px" }, 1000,function () { 
//         alert("bşarılı")
//      });
// }
