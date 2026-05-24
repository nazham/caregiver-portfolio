'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Contact() {
  const { contact } = portfolioContent;
  const { details, form } = contact;

  // Form Fields State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [careType, setCareType] = useState(form.servicesOptions[0]);
  const [shift, setShift] = useState(form.shiftOptions[0]);
  const [extraDetails, setExtraDetails] = useState('');

  // Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validations
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission request (WOW effect with loader and checkmark transition)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Block */}
        <div className="bg-blue-600 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-2 p-10 md:p-12 text-white bg-blue-700 relative overflow-hidden">
              {/* Decorative Circle Background element */}
              <div 
                className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" 
                aria-hidden="true"
              />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{contact.heading}</h3>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  {contact.description}
                </p>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-full shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{details.phoneLabel}</p>
                      <p className="font-semibold text-lg">{details.phone}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  {details.whatsapp && (
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 p-3 rounded-full shrink-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-200">{details.whatsappLabel}</p>
                        <p className="font-semibold text-lg">{details.whatsapp}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-full shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{details.emailLabel}</p>
                      <p className="font-semibold text-lg">{details.email}</p>
                    </div>
                  </div>
                  
                  {/* Location / Area */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-full shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{details.locationLabel}</p>
                      <p className="font-semibold text-lg">{details.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3 p-10 md:p-12 bg-white flex flex-col justify-center">
              {isSubmitted ? (
                /* Success View with Animation */
                <div 
                  className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-500"
                >
                  <div className="inline-flex bg-emerald-100 p-4 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h4>
                  <p className="text-slate-650 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{name}</strong>. I have received your request and will get back to you at <strong className="text-slate-900">{phone}</strong> within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setExtraDetails('');
                    }}
                    className="mt-8 text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center gap-1 mx-auto cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* Booking Form View */
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div 
                      className="p-4 bg-red-50 text-red-650 rounded-xl border border-red-100 text-sm font-medium"
                      role="alert"
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="contact-name" 
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-800"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="contact-phone" 
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="contact-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+94 77 123 4567"
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Care Required and Shift Selection */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="contact-care-type" 
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Care Required For
                      </label>
                      <div className="relative">
                        <select 
                          id="contact-care-type"
                          value={careType}
                          onChange={(e) => setCareType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white appearance-none text-slate-800 cursor-pointer"
                        >
                          {form.servicesOptions.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label 
                        htmlFor="contact-shift" 
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Preferred Shift
                      </label>
                      <div className="relative">
                        <select 
                          id="contact-shift"
                          value={shift}
                          onChange={(e) => setShift(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-slate-50 focus:bg-white appearance-none text-slate-800 cursor-pointer"
                        >
                          {form.shiftOptions.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional details */}
                  <div>
                    <label 
                      htmlFor="contact-details" 
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Additional Details
                    </label>
                    <textarea 
                      id="contact-details"
                      rows={4} 
                      value={extraDetails}
                      onChange={(e) => setExtraDetails(e.target.value)}
                      placeholder="Briefly describe the current situation and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none text-slate-800"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:bg-slate-700"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {form.submitCta} <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 mt-4">
                    {form.footerNote}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
