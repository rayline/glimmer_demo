/**
 * Created by rayline on 2015/11/30.
 */
function tryLogin(){
    if($("#email-a").val()=="admin@glimmer.com"&&$("#pass-a").val()=="admin"||true){
        $("#initMask").slideUp(300);
    }else{
        if($("#email-a").val()=="admin@glimmer.com"){
            $("#initLogin").slideUp(300);
            $("#")
        }
    }
    applySearch();
    startmain();
}