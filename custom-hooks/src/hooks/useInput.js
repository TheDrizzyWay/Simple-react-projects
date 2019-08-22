import { useState } from 'react';

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
   return {
     value,
     onChange: e => {
      setValue(e.target.value || e.target.innerText);
    },
  };
};

/* USAGE EXAMPLE 
const Landing = () => {  
const email = useInputValue("");  
const password = useInputValue("");   
const handleSubmit = e => {    
  e.preventDefault();    
  loginUser(email.value, password.value);
};
...
<input type="text" placeholder="Email" {...email} />
<input type="password" placeholder="Password" {...password} />
*/