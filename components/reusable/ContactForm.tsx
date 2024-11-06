import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const ContactForm = () => {
  return (
    <form className="max-w-lg mx-auto">
      <div className='md:flex flex-wrap mb-4 justify-between'>
        <div className="sm:w-full md:w-[48%]">
          <label className="block mb-2 text-white" htmlFor="name">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-amber-500"
            type="text"
            id="name"
            name="name"
            placeholder="First name"
            required
          />
        </div>
        <div className="sm:w-full md:w-[48%]">
          <label className="block mb-2 text-white" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-amber-500"
            type="email"
            id="email"
            name="email"
            placeholder="@gmail.com"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-amber-500"
          id="subject"
          name="subject"
          required
        >
          <option value="">Select a Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Feedback">Feedback</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white" htmlFor="message">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-amber-500"
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <button
          className="xs:w-full sm:w-1/2 text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#fff] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer px-4  focus:outline-none focus:bg-amber-400"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
