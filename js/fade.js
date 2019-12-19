$(function(){
    $(".header-fade").fadeIn(2000);
});

$(function(){
    $(".detailed-img").hover(
        function(){
            $(this).parent().find("p.desc").slideDown("fast");
        },function(){
            $(this).parent().find("p.desc").slideUp("fast");
    });
});