// <!-- jQuery call to the accordion() method. -->
$(document).ready(function () {
    //call the accordion method. on start, keep all panels closed.
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
})

