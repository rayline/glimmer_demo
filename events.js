/**
 * Created by rayline on 2015/11/3.
 */
function showLoginBox(){
    $("#loginBox").show(1000);
    $("#mask").fadeIn(1000);
}
function fadeAll(){
    $(".mask").fadeOut(1000);
    $(".hover").hide(1000);
}
function showRegBox(){
    $("#regBox").show(1000);
    $("#mask").fadeIn(1000);
}
function showAddBox(){
    $("#addBox").show(1000);
    $("#mask").fadeIn(1000);
}
function showDetail(clicker){
    $("#detailMask").fadeIn(1000);
    $("#close").show(1000);
    $("#detailBox").show(1000);
    $("#detailData").css("background",window.getComputedStyle(clicker).background);
}

function maintainSearchHint(){
    $(".searchHint").width($(".SearchInput").css("width")+$(".SearchInput").css("padding-left")+$(".SearchInput").css("padding-right"));
    pos = $(".stay_right").offset();
    $(".searchHint").css("top", pos.top+$(".stay_right").height());
    $(".searchHint").css("left", pos.left);
}

//document ready function
$(document).ready(function(){
    maintainSearchHint();

})