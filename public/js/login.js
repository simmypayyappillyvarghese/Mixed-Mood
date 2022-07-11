const emailValidator=(input)=>{


    return input.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/);

}


const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const errorMessage=document.querySelector('.error-message');

    let validInput=true;
    errorMessage.innerHTML=``;
        //Email and Password Validation

        if(!emailValidator(email)){

            errorMessage.innerHTML=`Email is not valid.Please try again.`+"<br>";
            validInput=false;
        }

        if(password.length<8){

            errorMessage.innerHTML+=`Password is not valid(min length:8). Please try again`;
            validInput=false;
        }
        

    if (validInput) {
       
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
      }
    } 
    return;
   
  };

 
  
  document.querySelector('#login').addEventListener('click', loginFormHandler);






