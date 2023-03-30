import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

interface Props {
  
}

const EmailForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
    const sendEmail = async (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        const emailSent = await axios.post("/api/mail/", JSON.stringify({
            email,
            name,
            htmlStr: `<h1>tester</h1>`,
        }))

        console.log(emailSent)
      };
    return (
        <form className='flex flex-col items-center'>
          <input 
            className='m-3 w-8/12 text-black rounded-sm placeholder:text-teal-700 placeholder:opacity-40' 
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
            value={email}
            placeholder='Enter your email...'
            type="text"
          />
          <input 
            className='m-3 w-8/12 text-black rounded-sm placeholder:text-teal-700 placeholder:opacity-40' 
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setName(ev.target.value)}
            value={name}
            placeholder='Enter your name...'
            type="text" 
          />
          <Button callback={sendEmail} message='Send Email'/>
        </form>
    )
}

export default EmailForm;
