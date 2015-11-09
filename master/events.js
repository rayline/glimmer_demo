/**
 * Created by rayline on 2015/11/3.
 */
function showLoginBox(){
    document.getElementById("loginBox").style.display="block";
    document.getElementById("mask").style.display="block";
}
function fadeAll(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("regBox").style.display="none";
    document.getElementById("mask").style.display="none";
    document.getElementById("addBox").style.display="none";
    document.getElementById("detailMask").style.display="none";
    document.getElementById("detailBox").style.display="none";
}
function showRegBox(){
    document.getElementById("regBox").style.display="block";
    document.getElementById("mask").style.display="block";
}
function showAddBox(){
    document.getElementById("addBox").style.display="block";
    document.getElementById("mask").style.display="block";
}
function showDetail(clicker){
    document.getElementById("detailMask").style.display="block";
    document.getElementById("detailBox").style.display="block";
    document.getElementById("detailData").style.background=window.getComputedStyle(clicker).background;
}