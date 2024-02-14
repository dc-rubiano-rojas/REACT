"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../public/github-logo.svg";
import LinkedinIcon from "../../public/linkedin-logo.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dara = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("====================================");
      console.log("Message sent");
      console.log("====================================");
      setEmailSubmitted(true);
    }
  };
  const testHandleSubmit = async (e) => {
    console.log("====================================");
    console.log("testHandleSubmit click");
    console.log("====================================");
    setEmailSubmitted(true);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
       from-purple-900 to-transparent 
       rounded-full h-80 w-80 z-0
       blur-lg absolute top-3/4 -left-4 transform
       -translate-x-1/2 -translate-1/2"
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut
          quaerat deserunt vel vitae qui rem, consequatur sint facere ducimus
          totam illum reprehenderit odit sequi beatae, quia possimus animi
          repellat.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/dc-rubiano-rojas" passHref>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/daniel-c-rubiano-rojas/"
            passHref
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={testHandleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] 
            border 
            border-[#33353F] 
            placeholder:[#9C12A9] 
            text-gray-100 
            text-sm rounded-lg
            block w-full p-2.5"
              placeholder="test@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] 
            border 
            border-[#33353F] 
            placeholder:[#9C12A9] 
            text-gray-100 
            text-sm rounded-lg
            block w-full p-2.5
            "
              placeholder="Just saying hi..."
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="messaje"
              id="message"
              className="bg-[#18191E] 
            border 
            border-[#33353F] 
            placeholder:[#9C12A9] 
            text-gray-100 
            text-sm rounded-lg
            block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 
            hover:bg-purple-600 
            text-white font-medium 
            py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && <p className="text-green-500 text-sm mt-2"></p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
