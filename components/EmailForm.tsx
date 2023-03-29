import React from 'react'
import Button from './Button';

interface Props {
  
}

const EmailForm = (props: Props) => {

    const sendEmail = async (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
      };
    return (
        <form className='flex flex-col items-center'>
          <input className='m-3 w-8/12' type="text" />
          <input className='m-3 w-8/12' type="text" />
          <input className='m-3 mb-6 w-8/12' type="text" />  
          <Button callback={sendEmail} message='Send Email'/>
        </form>
    )
}

export default EmailForm;
