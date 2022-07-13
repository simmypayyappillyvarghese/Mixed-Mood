const emailValidator=(input)=>{

    return input.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/);
}

//When User clicks on the sign up ,validates the input  
//and make a post call to the signup route to create a user
//and redirect to homepage 

const signUpHandler = async (event) => {  
    event.preventDefault();

    const email=document.querySelector('#signup-email').value.trim();
    const password=document.querySelector('#signup-password').value.trim();
    const error_message=document.querySelector('.error-message');
    const errorMessage=document.querySelector('.error-message');

    let validInput=true;
    error_message.innerHTML=``;
        //Email and Password Validation

        if(!emailValidator(email)){

            errorMessage.innerHTML=`Email is not valid.Please try again.`+"<br>";
            validInput=false;
        }

        if(password.length<8){

            errorMessage.innerHTML+=`Password is not valid(min length:8).Please try again`;
            validInput=false;
        }

   if(validInput){

    const response = await fetch('/api/user/signup', {
        method: 'POST',
        body:JSON.stringify({email,password}),
        headers: { 'Content-Type': 'application/json' },
      });
    
    
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }

   }
  
   return;
};

document.querySelector('#signup-button').addEventListener('click',signUpHandler);


