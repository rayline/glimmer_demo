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
function ShowAddCommentBox(event){
	var x=event.screenX,y=event.screenY;
	SetCommentBoxPosition(x,y);
	$("#comment1").hide(10);
	document.getElementById("CommentBox").style.left=x+100+"px";
	document.getElementById("CommentBox").style.top=y+"px";
	$("#CommentBox").show(1000);
    $("#mask3").fadeIn(1000);
	}
function SetCommentBoxPosition(x,y){
	
	document.getElementById("comment1").style.left=x+"px";
	document.getElementById("comment1").style.top=y+"px";
	}
function ShowComment(){
	$(".comhover").fadeOut(1000);
	document.getElementById("comment1").innerHTML=document.getElementById("comment").value;
	$("#comment1").show(10);
	}
//document ready function
$(document).ready(function(){
    maintainSearchHint();
    resizeMain();
})

$(window).resize(function(){
    resizeMain();
})

$(window).scroll(function(){
    $(".column").each(function(index, element){
        while($(element).height()+$(element).offset().top<$(document).scrollTop()+document.documentElement.clientHeight){
                rd = Math.floor(Math.random()*3);
                $(element).append(contentPreset[rd]);
        }
    })
})