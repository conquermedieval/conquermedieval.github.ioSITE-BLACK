var image = new Image();
image.src = "https://source.unsplash.com/random";
$("#unsplash").hide(0).append(image);
image.onload = function() {

    var img = $("#unsplash > img");

    // work with the img here
    $("#unsplash").fadeIn(100);
}
