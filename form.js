
// Initializing the emailjs application.
(function(){
  emailjs.init("user_3KGBY3C7G3MeNxiVEvNCj");
})();

// Field border turns red in case of invalid input.
function formError(field,id){
  document.getElementById(id).style.borderColor="red";
 }
//}

// Checks for empty fields.
function doIt(){
    var state=true;
    function check_null(value,id,field){
      if(value){
        return;
      }
      else{
        state=false;
        formError(field,id);
        return 1;
      }
}

// Checks for invalid characters or entries and send a message to the user accordingly.
function check_typing(value,id,field,reg){

     if(check_null(value,id,field)==1){
       formError(field,id);
       alert("Couldn't submit because the field "+field+ " is empty.");
       return 1;
     }
     else{
       if(reg.test(value)){
         return 0;
       }
       else{
         state=false;
         formError(field,id);
         alert("Couldn't submit because the " +field+ " that you provided is not valid or contains unexpected characters.");
         return 2;
       }
     }
}

  arr=[document.getElementById("fname").value,
       document.getElementById('lname').value,
       document.getElementById('email').value,
       document.getElementById('phone').value,
       document.getElementById('message').value];
     for(i=0;i<arr.length;i++){
       if(!state){
         break;
       }
      switch(i){
        case 0:
        check_null(arr[0],"fname","First Name");
        check_typing(arr[0],"fname","First Name",/^[a-z ,.'-]+$/i);
        break;
        case 1:
        check_null(arr[1],"lname","Last Name");
        check_typing(arr[1],"lname","Last Name",/^[a-z ,.'-]+$/i);
        break;
        case 2:
        check_null(arr[2],"email","Email");
        check_typing(arr[2],"email","Email",/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        break;
        case 3:
        check_null(arr[3],"phone","Phone");
        check_typing(arr[3],"phone","Phone",/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        break;
        case 4:
        check_null(arr[4],"message","Message");
        break;
      }
    }

// If all fields are appropriately filled, send a success message to the user and send the email.
if(state){

    emailjs.send("gmail","contact",{

    message: document.getElementById('message').value,
    fname: document.getElementById("fname").value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value

})

.then(
  function(response) {
    console.log("SUCCESS", response);
    alert("Thank you for your interest in GHM Robotics. Your query has been submitted, we will return to you shortly.");
  },
  function(error) {
    console.log("FAILED", error);
  }
);};

}
