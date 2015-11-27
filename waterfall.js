/**
 * Created by rayline on 2015/11/23.
 */

var presentCnt = 0;

var contentPreset = new Array();
contentPreset[0]="<img src='images/szt.jpg' width='100%' height='300px' class='insideImg'>";
contentPreset[1]="<img src='images/xyz.jpg' width='100%' height='250px' class='insideImg'>";
contentPreset[2]="<img src='images/dbw.jpg' width='100%' height='370px' class='insideImg'>";

function resizeMain(){
    wid = $("body").width();
    cnt = Math.floor(wid*0.95 / 165);
    $("#columnContainer").css("margin-left", (wid-cnt*165)/2);
    while(cnt>presentCnt){
        presentCnt++;
        $("#columnContainer").append("<div class='column column"+presentCnt +"'></div>");
        for(var i=1;i<=10;i++){
            rd = Math.floor(Math.random()*contentPreset.length);
            $(".column"+presentCnt).append(contentPreset[rd]);
        }
    }
    while(cnt<presentCnt){
        $(".column"+presentCnt).remove();
        presentCnt--;
    }
    $(".insideImg").click(function (){
        $("#comment1").hide(0);
        $("#detailBox").show(1000);
        $("#mask2").fadeIn(1000);
    })
}