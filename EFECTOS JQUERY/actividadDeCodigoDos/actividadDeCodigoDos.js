$(function () {
    $("#start").click(function () {
        $("#caja2").animate({"width":"2000px"},1000);
    });
    $("#stop").click(function () {
        $("#caja2").stop();
    });
});