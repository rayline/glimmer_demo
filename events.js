/**
 * Created by rayline on 2015/11/3.
 */
  var CommentNum=0;

function pxtonum(s){
	s = s.substring(0, s.length-2);
	return parseInt(s);
}

function showLoginBox(){
    $("#loginBox").show(1000);
    $("#mask").fadeIn(1000);
}
function fadeAll(){
    $(".mask").fadeOut(1000);
    $(".hover").hide(1000);
}
function fadeComment(){
	$(".comhover").hide(1000);
	$("#mask3").fadeOut(1000);
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
    $(".searchHint").width(pxtonum($("#searchInput").css("width"))+pxtonum($("#searchInput").css("padding-left")));
    pos = $("#searchInput").offset();
    $(".searchHint").css("top", pos.top+$("#searchInput").height());
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
	CommentNum=CommentNum+1;
	CreateComment(x,y);
	$("#CommentBox").show(1000);
    $("#mask3").fadeIn(1000);
	}
function CreateComment(x,y){
	var idname="comment"+CommentNum;
	var m="<div id='"+idname+"'></div>";
	$("body").append(m);
	$("#"+idname).addClass("comment");
	$("#"+idname).addClass("hover");
	y=y-50;
	$("#"+idname).css("top",y+"px");
	$("#"+idname).css("left",x+"px");
	x=x+160;
	y=y+160;
	document.getElementById("CommentBox").style.top=y+"px";
	document.getElementById("CommentBox").style.left=x+"px";
	
	}
function ShowComment(){
	$(".comhover").fadeOut(1000);
	var idname="comment"+CommentNum;
	document.getElementById(idname).innerHTML=document.getElementById("comment").value;
	$("#"+idname).show(10);
	}
//document ready function
$(document).ready(function(){
    maintainSearchHint();

});

function startmain(){

	resizeMain();
	$("#searchInput").on("blur",function(){$(".hint").remove()});

	$("#searchInput").on("change keyup paste",function(){
		addHint(this);
	});
}

$(window).resize(function(){
	maintainSearchHint();
    resizeMain();
});

$(window).scroll(function(){
    $(".column").each(function(index, element){
        while($(element).height()+$(element).offset().top<$(document).scrollTop()+document.documentElement.clientHeight){
			rd = Math.floor(Math.random()*searchResult.length);
				$(element).append(searchResult[rd]);
        }
    });
	$(".insideImg").click(function (){
		$("#comment1").hide(0);
		$("#detailBox").show(1000);
		$("#mask2").fadeIn(1000);
	})
});


var hintPreset = new Array();
hintPreset[0] = "xyz";
hintPreset[1] = "szt";
hintPreset[2] = "dbw";


function addHint(object){
	//$(".hint").remove();
	//animation should be here
	var cnt = 0;
	for(i=0;i<hintPreset.length;i++){
		if(hintPreset[i].search($(object).val())!=-1){
			cnt++;
			$(".searchHint").append("<div class='hint'>"+hintPreset[i]+"</div>");
		}
	}
	$(".hint").hover(function(){
		$("#searchInput").off("blur");
	},function(){
		$("#searchInput").on("blur",function(){$(".hint").remove()});
	});
	$(".hint").click(
		function(){
			var a = $(this).text();
			$("#searchInput").val(a);
			$(".hint").remove();
			applySearch();
		}
	);
}
