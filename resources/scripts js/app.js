$(document).ready(function(){
    // STICKY MENU 
    $(".js__services").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    })

    // Mixitup (PORTFOLIO SECTION)
    var mixer = mixitup('.container')
})