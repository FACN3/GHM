
// Initializing the emailjs application.
(function(){
  emailjs.init("user_3KGBY3C7G3MeNxiVEvNCj");
})();


function doIt(){
    var state=true;
    function check_null(value,id,field){
      if(value){
        return;
      }
      else{
        state=false;
        formError(1,field,id);
      }
}

function check_typing(value,id,field,reg){
     if(reg.test(value)){
       return;
     }
     else{
       state=false;
         formError(2,field,id);
     }
}

arr=[document.getElementById("fname").value,
    document.getElementById('lname').value,
    document.getElementById('email').value,
    document.getElementById('phone').value,
    document.getElementById('message').value];
    for(i=0;i<arr.length;i++){
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

if(state){
    emailjs.send("gmail","contact",{

  message: document.getElementById('message').value,
  fname:   document.getElementById("fname").value,
  lname: document.getElementById('lname').value,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value

})

.then(
  function(response) {
    console.log("SUCCESS", response);
  },
  function(error) {
    console.log("FAILED", error);
  }
);};

function formError(errCode,field,id){
  document.getElementById(id).style.borderColor="red";
  if(errCode==1){
    alert("Couldn't submit beacuse you haven't filled "+field);}
  if(errCode==2){
    alert("Couldn't submit beacuse the "+field+ " isn't filled properly");}
 }
}
