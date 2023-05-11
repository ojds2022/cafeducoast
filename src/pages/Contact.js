import React, {useState} from 'react';
import CoffeeBeans from '../assets/laStreet.jpg';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = () => {
    setMessageSent(!messageSent);
  }

  return (
    <div className="flex h-72.5vh ">
      <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: `url(${CoffeeBeans})` }}></div>
      <div className="w-3/5 flex flex-col justify-center">
        {messageSent ? 
        (
          <div className='text-center'>
              <h1 className='text-2xl font-bold'>Message has been sent</h1>
              <p className='text-xl'>Thank you!</p>
          </div>
        ) : (
          <>
          <h1 className='text-3xl mx-2 mt-3'>Contact Us</h1>
        <form id="contact-form" className='p-3 flex flex-col w-auto h-auto' method="POST">
          <label htmlFor="name" className='text-base mt-5'>Full Name</label>
          <input className="border-b-1 border-off-black h-10 w-5/6 focus:outline-none placeholder:font-bold" name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email" className='text-base mt-5'>Email</label>
          <input className="border-b-1 border-off-black h-10 w-5/6 focus:outline-none placeholder:font-bold" name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message" className='text-base mt-5'>Message</label>
          <textarea
            className='border-b-1 border-off-black h-16 mt-5 w-5/6 focus:outline-none placeholder:font-bold'
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          >
          </textarea>
          <button className="bg-off-black text-white hover:bg-bone-white hover:text-off-black cursor-pointer rounded h-10 w-36 mt-3 mb-1" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
          </>
        )
        }
      </div>
    </div>
  );
}

export default Contact;
