/* Here goes your JS code */
document.getElementById("show-popup-form").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none"
})