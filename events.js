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

var file = "";

function upload(){
	file = $("#pictureupload").val();
	//alert(file);
	var pos = file.lastIndexOf("\\");
	file = file.slice(pos+1,file.length);
	//$("#pictureupload").after("<img src='"+file.slice(pos,file.length)+"' width='300' height='400'>");
	//$("#pictureupload").after("<img src='add.png' width='300' height='400'>");
	$("#pic").show(0);
}

function addContent(){
	$(".column1 .insideImg").animate({
		top : "+=130"
	},400);
	$(".column1").prepend("<div class='insideImg' id='toShow' style='display: none' height='150px'><img src="+ file +" width='100%' height='100px'>"+ $("#message-text").val()+"</div>");
	$("#toShow").fadeIn({
		duration : 600,
		queue : true
	});
}

function maintainSearchHint(){
    $(".searchHint").width(pxtonum($("#searchInput").css("width"))+pxtonum($("#searchInput").css("padding-left")));
    pos = $("#searchInput").offset();
    $(".searchHint").css("top", pos.top+$("#searchInput").height());
    $(".searchHint").css("left", pos.left);
}

function ShowAddCommentBox(event){
	var x=event.clientX+document.body.scrollLeft,y=event.clientY+document.body.scrollTop;
	var divleft=$("#detailBox").offset().left;
	var divlen=$("#detailBox").length;
	if (x<=divleft){
		CommentNum=CommentNum+1;
		CreateComment(x,y);
		$("#CommentBox").slideDown(1000);
		$("#mask3").fadeIn(1000);
	}
	if (x>=divleft+divlen){
		fadeAll();
	}
}
function CreateComment(x,y){
	var idname="comment"+CommentNum;
	var m="<div id='"+idname+"'></div>";
	$("body").append(m);
	$("#"+idname).addClass("comment");
	$("#"+idname).addClass("hover");
	$("#"+idname).css("top",y+"px");
	$("#"+idname).css("left",x+"px");
	y=y+220;
	x=x+280;
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
	$(function () {
		$('[data-toggle="popover"]').popover()
	});
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
