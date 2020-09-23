// For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, it will not allow the form to submit.


function validation(){
    var z = document.forms["validate"]["fristname"].value;
    var y = document.forms["validate"]["checkme"].value;
    if(z == ""){
        alert("enter the credentials");
        return false;
    }
    else if( y ==""){
        alert("enter click on check credentials");
        return false;
    }
}