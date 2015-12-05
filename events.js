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
	commentFlag = false;
}
function fadeComment(){
	$("#mask3").fadeOut();
	$(".comhover").slideUp();
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
		$("#CommentBox").slideDown();
		$("#mask3").fadeIn();
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

var commentFlag = false;
var readyForMore = false;
var Mored = false;
var t=0;
var running = false;
var commented = 0;

//todo: change commentCnt if more comments are added
commentCnt = 1;

$(window).scroll(function(){
    $(".column").each(function(index, element){
        while($(element).height()+$(element).offset().top<$(document).scrollTop()+document.documentElement.clientHeight){
			rd = Math.floor(Math.random()*searchResult.length);
				//$(element).append(searchResult[rd]);
				$(searchResult[rd]).css("display","none").appendTo(element).fadeIn("slow");
        }
    });
	$(".insideImg").click(function (){
		var y=$(document).scrollTop();
		$("#detailBox").css("top",y+"px").css("left",150+"px").slideDown(1000);
		$("#mask").fadeIn(100);
		$("#mask2").fadeIn(100);
		$("#mask5").show();
		commentFlag=true;
	});
	if(commentFlag){
		if(commented==0)commented = $("#detailBox").offset().top+$("#detailBox").height();
		if(!running&&(t==0||(new Date()).getTime()-t<=500&&$("#detailBox").offset().top+$("#detailBox").height()<$(window).height()+$(window).scrollTop())){
			running = true;
			$("body,html,document").animate({
				scrollTop:$("#detailBox").offset().top+$("#detailBox").height()-$(window).height()
			},300,"swing",function(){Mored = true;running = false;});
			if(!readyForMore){
				var d = new Date();
				t = d.getTime();
			}
			readyForMore = true;
			//TODO: add a bottom banner showing "scroll down to see more comments"
		}else{
			if(!running&&!Mored&&$("#detailBox").offset().top+$("#detailBox").height()<$(window).height()+$(window).scrollTop()){
				running = true;
				$("body,html,document").animate({
					scrollTop:$("#detailBox").offset().top+$("#detailBox").height()+20
				},500,"swing",function(){Mored = true;running = false;});
			}
			if(!running&&Mored&&$("#detailBox").offset().top+$("#detailBox").height()>$(window).scrollTop()){
				running = true;
				console.log("fire");
				$("body,html,document").animate({
					scrollTop :$("#detailBox").offset().top+$("#detailBox").height()-$(window).height()-20
				},500,"swing",function(){Mored = false;running = false;});
			}
		}
		console.log($(window).height()+$(window).scrollTop(),commented);
		if(!running&&$(window).height()+$(window).scrollTop()-commented>300){
			running = true;
			console.log("firing!");
			blank = $(window).height()+$(window).scrollTop()-commented;
			commented = $(window).height()+$(window).scrollTop();
			console.log("pos ",$(window).height()+$(window).scrollTop());
			console.log("commented "+commented);
			wid = $(window).width();
			hei = $(window).height();
			var top = 0;
			top = $(window).scrollTop();
			for(i=1;i<=blank/70;i++){
				rd = Math.random();
				rd = Math.floor(Math.random() * commentCnt);
				$(".commentTemplate"+rd).clone().removeClass("commentTemplate"+rd).addClass("comment extraComment").css("top",Math.random()*blank+(hei-blank)+top).css("left",Math.random()*(wid-$(".commentTemplate"+rd).width())).appendTo("body").fadeIn();
			}
			running = false;
		}
		console.log(commented);
	}
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




//because of efficiency problem, it's now a deprecated feature, which will be replaced with a better optimized one
/*$(function() {
	$.contextMenu({
		selector: '#mask2',
		items: {
			More: {name: "More Comments", callback: function(){
				$("#mask4").fadeIn();
				$("#mask5").fadeIn();
				$(".comment").hide().clone().addClass("extraComment").css("display","block").appendTo("#mask5");
				wid=$(window).width();
				hei=$(window).height();
				for(i=1;i<=10;i++){
					rd = Math.floor(Math.random() * commentCnt);
					$(".commentTemplate"+rd).clone().addClass("comment").addClass("extraComment").css("top",Math.random()*hei).css("left",Math.random()*wid-pxtonum($("#mask5").css("left"))).appendTo("#mask5").fadeIn();
				}
				$("#mask5").mousewheel(function (event) {
					$("html").scrollTop($(window).scrollTop()-event.deltaY*event.deltaFactor);
					offs += event.deltaY*event.deltaFactor;
					$("#mask5").animate({
						left: "+=" +event.deltaY*event.deltaFactor
					},100);
					if(offs<-wid/4){
						offs = -offs;
						//for(i=1;i<=4;i++){
						console.log("generating");
							rd = Math.floor(Math.random() * commentNum);
							$(".commentTemplate"+rd).clone().addClass("comment").addClass("extraComment").appendTo("#mask5").fadeIn();
							//$(".commentTemplate"+rd).clone().addClass("comment").addClass("extraComment").css("top",Math.random()*hei).css("left",Math.random()*offs+(wid-offs)-pxtonum($("#mask5").css("left"))).appendTo("#mask5").fadeIn();
						//}0
						offs = 0;
					}
				})
			}}
		}
	});

	$('#mask2').on('click', function(e){
		console.log('clicked', this);
	})
});*/

function commentReset(){
	$(".extraComment").fadeOut();
	$("#mask4").fadeOut();
	$("#mask5").fadeOut();
}