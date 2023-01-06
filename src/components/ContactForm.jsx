import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
   
  const form = useRef();
  
 
  const sendEmail = (e) => {
    e.preventDefault();

   
    
  emailjs.sendForm ('mercado123', 'mercado123',form.current, '5CACpfiI-g7LfZNJD')

     .then(
       (result) => {
       
         alert("Gracias!");
       },
       (error) => {
        
         alert("Error...", error);
     
        }
        
     );
     
 };
   


  

  return (

    
 


  <div id='contacto'>
    <form ref={form} onSubmit={sendEmail} className="mt-6" >

  
    <form /*ref={form} onSubmit={sendEmail} */ className="mt-6">

    
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-300 " >
      <div className=" w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-grey-600/40 ring-2 ring-green-600 lg:max-w-xl">
        <h1 className="text-5xl font-semibold text-green-700 font-tipo1  ">
        Contáctanos
        </h1>
      
        <div className="mb-2">
      <label>
              
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className=" w-full
          block px-16 py-2 mt-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
          
          
        "
        required
        />
        </label>
      </div>
      <div className="mb-2">
      <label>
             
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="email"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <textarea
                name="message"
                className="
                
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Mensaje"
                rows="5"
                required
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-green-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-800
          "
          required
            >
              Enviar
            </button>
            
     
      </div>
     


      </div></div>

     
    </form>
    </div>
  );
};

export default ContactForm;