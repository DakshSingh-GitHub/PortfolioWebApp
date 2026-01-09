"use client";

import { useState } from "react";
import { classNames } from "@/components/styles";
import ReachMeOut from "@/components/pagecomponent/ReachMeOut";

import { motion } from "framer-motion";

export default function ContactMePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const mailtoSubject = encodeURIComponent(subject);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:gnomeuser001@gmail.com?subject=${mailtoSubject}&body=${body}`;

        window.location.href = mailtoLink;

        setStatusMessage("Please check your email client to send the message.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className="p-4 md:p-10 cursor-default">
            <div className="toplevel flex flex-col items-center w-full md:w-3/4 mx-auto pb-10 px-2 md:px-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1
                        className={`${classNames.aboutHeader} ${classNames.textGlowEffect}`}
                    >
                        Contact Me
                    </h1>
                    <p className="text-sm md:text-lg text-center md:text-justify">
                        I&apos;m always open to discussing new projects,
                        creative ideas, or opportunities to be part of an
                        amazing team. Feel free to reach out to me through the
                        form below or connect with me on social media.{" "}
                        <span
                            className={`${classNames.spanText} ${classNames.textGlowEffect}`}
                        >
                            My Contact handles are always open for good vibes :)
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    className="contact-form w-full max-w-lg mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <form
                        onSubmit={sendEmail}
                        className="bg-gray-900/50 border border-purple-500/30 rounded-lg shadow-lg p-8 space-y-6 transition-all duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-500"
                    >
                        <div className="form-group">
                            <label
                                htmlFor="name"
                                className={`block text-lg font-medium ${classNames.textGlowEffect}`}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-2 block w-full bg-gray-800/60 border border-purple-400/50 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="email"
                                className={`block text-lg font-medium ${classNames.textGlowEffect}`}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-2 block w-full bg-gray-800/60 border border-purple-400/50 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="subject"
                                className={`block text-lg font-medium ${classNames.textGlowEffect}`}
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="mt-2 block w-full bg-gray-800/60 border border-purple-400/50 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="message"
                                className={`block text-lg font-medium ${classNames.textGlowEffect}`}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                required
                                className="mt-2 block w-full bg-gray-800/60 border border-purple-400/50 rounded-md shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${classNames.textGlowEffect}`}
                            >
                                Send Message
                            </button>
                        </div>
                        {statusMessage && (
                            <p className="text-center mt-4">{statusMessage}</p>
                        )}
                    </form>
                </motion.div>
            </div>
            <hr />
            <div className="flex flex-col items-center w-full md:w-3/4 mx-auto pb-10 px-2 md:px-0">
                <ReachMeOut />
            </div>
        </div>
    );
}
