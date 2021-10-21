
$(function() {
    $(".js_menu_item").on("click", function () {
        const refId = $(this).data("ref");
        console.log($(this), refId);
        $(".js_content").removeClass("visible");
        $("#" + refId).addClass("visible");
    });
});
