import Spline from "@splinetool/react-spline";
import Image from "next/image";
import ContactImage from '@/assets/ContactImage.jpg'
import React, { useState, useRef, useEffect } from "react";
import lottie from 'lottie-web';
import { SignupFormDemo } from "../SignupFormDemo";

function ContactSection() {

  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/86fa6733-183b-45b0-8bb6-04cbc29d9343/ICt74By09D.json'
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully. Thanks for reaching out!");
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className="flex bg-cover bg-full bg-[url('https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-black-orange-3d-abstract-wallpaper-free-photo.jpg')]">
        <div className=" h-screen w-1/2 justify-center align-middle content-center ">
          {/* <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto mt-8 space-y-6 rounded-3xl p-8 backdrop-filter bg-transparent backdrop-blur-lg"
            >
              <div>
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-2 bg-gray-700 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-2 bg-gray-700 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50 h-8"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="block w-full mt-2 bg-gray-700 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50 h-8"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full mt-2 bg-gray-700 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50"
                  required
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="bg-futuristic-blue hover:bg-futuristic-blue/90 text-white font-bold py-3 px-4 rounded-3xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div> */}
          <SignupFormDemo />
        </div>
        <div className="">
          <div ref={animationContainer} className=" mix-blend-screen"></div>
          
          CONTACT US
        </div>
        
      </div>
    </div>
  );
}

export default ContactSection;
