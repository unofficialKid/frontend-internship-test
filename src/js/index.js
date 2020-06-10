/* Here goes your JS code */
document.getElementById("show-popup-form").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none"
})

document.getElementById("btn-submit").addEventListener("click", function(){
    var check = document.getElementById("check").checked;
    if(check==false){      
    alert("You must accept conditions"); return false;}
    else return true;
})