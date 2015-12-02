/**
 * Created by rayline on 2015/11/30.
 */
function tryLogin(){
    if($("#email-a").val()=="admin@glimmer.com"&&$("#pass-a").val()=="admin"||$("#email-b").val()=="admin@glimmer.com"&&$("#pass-c").val()=="admin"){
        applySearch();
        startmain();
        $("#account").text("admin");
        $('#account').popover('destroy')
        $("#initMask").slideUp(300);
        return;
    }else
    {
        if($("#email-a").val()=="admin@glimmer.com"){

        }else{
            $("#initLogin").slideUp(300);
            $("#secondLogin").slideDown(300);
        }
    }
    applySearch();
    startmain();
}

function register(){
    if($("#pass-a").val()!=$("#pass-b").val()) return;
    $("#account").text($("#email-a").val());
    $("#initMask").slideUp(500);
    $("#account").focus();
    $("#msgModal").modal();
}