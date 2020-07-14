$(window).scroll(function() {
    trigger_height = document.querySelector(".gradient").clientHeight;
    trigger_height = trigger_height / 2;
    console.log(document.querySelector(".gradient").clientHeight);

    if ($(window).scrollTop() > trigger_height) {
        $(".name").css("position", "fixed");
        $(".name").css("top", "1%");
        $(".icon").css("top", "20%");
    }

    if ($(window).scrollTop() < trigger_height) {
        $(".name").css("position", "absolute");
        $(".name").css("top", "50%");
        if (window.innerHeight > 1000) {
            $(".icon").css("top", "25%");
        } else {
            $(".icon").css("top", "6%");
        }
    }
    // if (window.innerHeight > 1200) {

    // } 

});