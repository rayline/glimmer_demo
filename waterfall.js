/**
 * Created by rayline on 2015/11/23.
 */

var presentCnt = 0;

var contentPreset = new Array();
contentPreset[0] = "<img src='images/szt.jpg' width='100%' height='300px' class='insideImg'>";
contentPreset[1] = "<img src='images/xyz.jpg' width='100%' height='250px' class='insideImg'>";
contentPreset[2] = "<img src='images/dbw.jpg' width='100%' height='370px' class='insideImg'>";

var search ="";

var searchResult = new Array();

function resizeMain() {
    var wid;
    wid = $("body").width();
    var cnt;
    cnt = Math.floor(wid * 0.95 / 200);
    $("#columnContainer").css("margin-left", (wid - cnt * 200) / 2);
    var rd;
    while (cnt > presentCnt) {
        presentCnt++;
        $("#columnContainer").append("<div class='column column" + presentCnt + "'></div>");
        for(i=1;i<=10;i++){
            rd = Math.floor(Math.random() * searchResult.length);
            $(".column" + presentCnt).append(searchResult[rd]);
        }
    }
    while (cnt < presentCnt) {
        $(".column"+presentCnt).remove();
        presentCnt--;
    }
    $(".insideImg").click(function (){
        $("#comment1").hide(0);
        $("#detailBox").slideDown(1000);
        $("#mask2").fadeIn(100);
    })
}


function applySearch(){
    search = $("#searchInput").val();
    searchResult.length=0;
    for(var i=0;i<contentPreset.length;i++){
        if(contentPreset[i].search(search)!=-1){
            searchResult.push(contentPreset[i]);
        }
    }
    $(".column").remove();
    presentCnt=0;
    resizeMain();
}