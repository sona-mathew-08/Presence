import React from "react";
import classNames from 'classnames';

const Contact = () => {
    const inputClass = classNames(
        'bg-gray-700',
        'outline-none',
        'rounded-lg',
        'p-3'
      );
    
      const placeholderClass = classNames(
        'text-lg'
      );
  const contact_info = [
    { logo: "mail", text: "presence@gmail.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "demo location",
    },
  ];
  return (
    <section id="contact" className="bg-black py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Us</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5 bg-gray-800">
            <input className={inputClass} type="text" placeholder="Your Name" />
            <input className={inputClass} type="Email" placeholder="Your Email Address" />
            <textarea className={inputClass} placeholder="Your Message" rows={10}></textarea>
            <button className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;