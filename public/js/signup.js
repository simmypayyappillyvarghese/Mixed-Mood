
const email=document.querySelector('#signup-email');
const password=document.querySelector('#signup-password');

const signUpHandler = async () => {  
  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body:JSON.stringify({email,password}),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(`${userData.email} signed up`);
  if (response.ok) {
    document.location.replace('/home');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#signup-button').addEventListener('click',signUpHandler);


// const renderSignUp = ()=>{

  
//         document.location.replace('/signup');
   

// }

// document.querySelector('.sign-up-link').addEventListener(click,renderSignUp);