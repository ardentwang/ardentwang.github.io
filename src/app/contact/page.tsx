"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import SocialButtons from "@/components/contact-components/SocialButtons";

emailjs.init('Xb5vxAulzJk_hP84B');

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateContact = (contact: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    return emailRegex.test(contact.trim()) || phoneRegex.test(contact.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    const { name, contact, subject, message } = formData;
    
    if (!name.trim() || !contact.trim() || !subject.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (!validateContact(contact)) {
      toast.error('Please enter a valid email address or phone number');
      return;
    }

    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_wppmtq7',
        'template_n1jemqw',
        { 
          name: name.trim(),
          email: contact.trim(),
          message: `Subject: ${subject.trim()}\n\n${message.trim()}`
        }
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      
      setFormData({
        name: '',
        contact: '',
        subject: '',
        message: '',
      });
    } catch {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#ca2a2a] transition-colors">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#ff7979] dark:text-[#342e2e]">Get In</span>
            <span className="text-[#2d2d2d] dark:text-white"> Touch</span>
          </h1>
          <p className="text-xl text-[#2d2d2d]/70 dark:text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together. I&apos;m always open to discussing new opportunities.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-[#342e2e]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[#2d2d2d] dark:text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#342e2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7979] dark:focus:ring-[#342e2e] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="contact" 
                    className="block text-sm font-medium text-[#2d2d2d] dark:text-white mb-2"
                  >
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#342e2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7979] dark:focus:ring-[#342e2e] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-[#2d2d2d] dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#342e2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7979] dark:focus:ring-[#342e2e] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-[#2d2d2d] dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#342e2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7979] dark:focus:ring-[#342e2e] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-vertical text-[#2d2d2d] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#ff7979] dark:bg-[#342e2e] text-white dark:text-[#ca2a2a] py-4 px-6 rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#ff7979] dark:focus:ring-[#342e2e] focus:ring-offset-2 dark:focus:ring-offset-[#2d2d2d] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 shadow-lg shadow-[#ff7979]/25 dark:shadow-[#342e2e]/25 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-[#342e2e]/30">
              <p className="text-center text-[#2d2d2d]/70 dark:text-white/70 mb-6">
                Or reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.location.href = 'mailto:ardentwang@gmail.com'}
                  className="flex items-center gap-2 text-[#ff7979] dark:text-[#342e2e] hover:text-[#ff5757] dark:hover:text-[#231d1d] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ardentwang@gmail.com
                </button>
                <span className="hidden sm:inline text-gray-300 dark:text-[#342e2e]/30">•</span>
                <button 
                  onClick={() => window.location.href = 'tel:+19096308025'}
                  className="flex items-center gap-2 text-[#ff7979] dark:text-[#342e2e] hover:text-[#ff5757] dark:hover:text-[#231d1d] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (909) 630-8025
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <SocialButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;