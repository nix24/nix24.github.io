$(document).ready(function () {
        //script to swap out img with thumbnail with animation/effect
        $("#image_list a").click(function (e) {
                e.preventDefault();
                let caption = $(this).attr("title");
                $("#caption").text(caption);
        });


        $("#image_list li a img").click(function (event) {
                //prevent the default behavior of the link
                event.preventDefault();
                //grab the href of the link               
                let img_src = $(this).attr("href");
                //fade out the image
                $("#image").fadeOut(500, function () {
                        //change the image to the new image
                        $("#image").attr("src", img_src);
                        //fade in the image
                        $("#image").fadeIn(3000);
                        //After the image fades in, add statements to change the font size of the caption to 2.0 em 
                        $("#caption").animate({
                                fontSize: "2.0em"
                        }, 3000);
                });;
                $("#image_list li a img").removeClass("active");
                $(this).addClass("active");
        });

});




