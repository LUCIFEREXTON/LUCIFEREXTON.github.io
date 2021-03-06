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

var gallery = document.querySelector('#gallery');
var getVal = function(elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function(item) {
    return item.querySelector('.content').getBoundingClientRect().height;
};
var resizeAll = function() {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function(item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function(item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    } else {
        item.addEventListener('load', function() {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('full');
    });
});

document.querySelectorAll(".limit")[0].addEventListener("click", function() {
    window.location = window.location.origin + "/gallery.html";
});