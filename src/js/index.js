/* Here goes your JS code */
document.getElementById("show-popup-form").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none"
})

const myForm = document.getElementById("popup-form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var check = document.getElementById("check").checked;

    if(check == true){
        setTimeout(function(){
        document.querySelector(".popup").style.display="none";
        document.getElementById("show-popup-form").style.display="none"
        document.getElementById("show-thankyou").style.display="flex"
        }, 3000);
        return false;
    }else{
        alert('You must accept all conditions')
    }
})