/**
 * Created by rayline on 2015/11/23.
 */

var presentCnt = 0;

var contentPreset = new Array();
contentPreset[0] = "<img src='images/szt.jpg' width='100%' height='300px' class='insideImg'>";
contentPreset[1] = "<img src='images/xyz.jpg' width='100%' height='250px' class='insideImg'>";
contentPreset[2] = "<img src='images/dbw.jpg' width='100%' height='370px' class='insideImg'>";

var search ="";

function resizeMain() {
    var wid = $("body").width();
    var cnt = Math.floor(wid * 0.95 / 165);
    $("#columnContainer").css("margin-left", (wid - cnt * 165) / 2);
    while (cnt > presentCnt) {
        presentCnt++;
        $("#columnContainer").append("<div class='column column" + presentCnt + "'></div>");
        for (var i = 1; i <= 10; i++) {
            times = 0;
            rd = Math.floor(Math.random() * contentPreset.length);;
            while(contentPreset[rd].search(search)==-1&&times<=10){
                rd = Math.floor(Math.random() * contentPreset.length);
                times++;
            }
            if(times<=10)$(".column" + presentCnt).append(contentPreset[rd]);
        }
    }
    while (cnt < presentCnt) {
        $(".column" + presentCnt).remove();
        contentPreset[0] = "<img src='images/szt.jpg' width='100%' height='300px' class='insideImg'>";
        contentPreset[1] = "<img src='images/xyz.jpg' width='100%' height='250px' class='insideImg'>";
        contentPreset[2] = "<img src='images/dbw.jpg' width='100%' height='370px' class='insideImg'>";
    }
    $(".insideImg").click(function (){
        $("#comment1").hide(0);
        $("#detailBox").show(1000);
        $("#mask2").fadeIn(1000);
    })
}


function applySearch(){
    search = $("#searchInput").val();
    $(".column").remove();
    presentCnt=0;
    resizeMain();
}