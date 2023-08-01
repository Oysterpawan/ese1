

function Validate(){
    let phone = document.querySelector(".phone").value;
    let errorfield = document.querySelector(".errorfield");
    let v = phone.length;
    if(v == 10){
        errorfield.textContent = "submitted";
    }
    else{
        errorfield.textContent = "phone number should of length 10";
    }
}