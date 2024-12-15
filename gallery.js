"use strict";

$(document).ready(() => {
    // Preload images
    $("#image_list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    // Attach event handlers for links 
    $("#image_list a").click((evt) => {
        // Get clicked <a> tag
        const link = evt.currentTarget;

        // Swap image
        $("#image").attr("src", link.href);
        
        // Swap caption
        $("#caption").text(link.title);

        // Cancel the default action of the link
        evt.preventDefault(); // jQuery cross-browser method
    });

    // Move focus to first thumbnail
    $("#image_list li:first-child a").focus();
});
