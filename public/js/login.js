
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    const errorMessage=document.querySelector('.error-message');
  
    console.log(email,password);
  
    if(! email || ! password){
        errorMessage.style.display="block";
        errorMessage.innerHTML=`Please enter the email or password`;
        return;
    }
  
    if (email && password) {
       
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
    console.log(response);
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document.querySelector('#login').addEventListener('click', loginFormHandler);






