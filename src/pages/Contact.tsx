import React, { useState } from "react";

const Contact = () => {
  return (
    <div className=" bg-cover  bg-[url('https://images.unsplash.com/photo-1598133893778-ed19656d6a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]">
   <section className=" bg-transparent  md:w-[40%] md:h-screen h-screen p-4 ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white  ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center  :text-gray-400 sm:text-xl text-white">
          Your pet needs treatment? 
           Let us know.
        </p>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  :border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium  dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium  dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm bg-stone-700 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none w-full md:w-full mx-auto "
          >
            Send message
          </button>
        </form>
      </div>
    </section> 
    </div>
  );
};

export default Contact;
