import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Prepend 'fromPiratesSte' to subject
    const subject = data.get('subject');
    if (subject) {
      data.set('subject', `fromPiratesSte ${subject}`);
    }
    try {
      const res = await fetch('https://formspree.io/f/xblalkyg', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
              <div className="container-max px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Have questions about joining our club? We'd love to hear from you!
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-300">(850) 585-6233</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Available Mon-Fri, 9AM-6PM</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Email</h4>
                          <p className="text-gray-600 dark:text-gray-300">Swimecff@gmail.com</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">We'll respond within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Location</h4>
                          <p className="text-gray-600 dark:text-gray-300">Taj Renee Community Aquatic Center</p>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=4345+Commons+Dr+W,+Destin,+FL+32541"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:underline"
                          >
                            4345 Commons Dr W, Destin, FL 32541
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Social Media */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=61555120244899#" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center text-3xl">
                          <span className="font-semibold">f</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Contact Form */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send us a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                            placeholder="Your first name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                            placeholder="Your last name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="schedule">Schedule Question</option>
                          <option value="training">Training Information</option>
                          <option value="general">General Question</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                        disabled={status === 'success'}
                      >
                        <Send size={20} />
                        <span>{status === 'success' ? 'Message Sent!' : 'Send Message'}</span>
                      </button>
                      {status === 'success' && (
                        <p className="text-green-600 text-center mt-4">Thank you! Your message has been sent.</p>
                      )}
                      {status === 'error' && (
                        <p className="text-red-600 text-center mt-4">Sorry, there was a problem sending your message. Please try again.</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
    </section>
  );
}

export default Contact;
