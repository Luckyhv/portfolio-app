import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className="con3">
            <form action="https://getform.io/f/1d8248d9-e7a9-49fe-af33-bcb838d1ceb2" method="POST">
                    <div className='title'>
                        <p className='tp'>Contact</p>
                        <p>Submit the form below or shoot me an email!</p>
                    </div>
                    <div className="inputs">
                    <input type="text" name="name" id="" placeholder='Enter Name' required/>
                    <input type="email" name="email" id="" placeholder='Enter Email' required/>
                    <textarea name="Message" id=""  rows="12" placeholder='Message'></textarea>
                    </div>
                    <button type='submit' className='subbtn'>Submit</button>
                </form>
                 </div>
        </div>
    )
}

export default Contact
