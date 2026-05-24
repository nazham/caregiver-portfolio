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
                        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.208-3.791c1.666.988 3.313 1.488 5.743 1.489 5.485.002 9.948-4.46 9.95-9.953.001-2.659-1.026-5.163-2.893-7.034-1.868-1.87-4.373-2.9-7.032-2.9-5.492 0-9.955 4.462-9.958 9.96-.001 2.203.58 4.358 1.684 6.26l-.997 3.648 3.796-.991zm11.391-7.291c-.312-.156-1.848-.912-2.129-1.014-.281-.102-.486-.153-.69.153-.205.307-.791.995-.97 1.2-.178.205-.357.23-.669.074-2.584-1.293-4.225-2.732-5.116-4.271-.235-.407.235-.378.672-1.252.074-.15.037-.282-.018-.393-.056-.113-.486-1.173-.666-1.606-.176-.425-.37-.367-.506-.374-.131-.007-.281-.008-.431-.008s-.393.056-.599.28c-.206.225-.786.769-.786 1.874s.804 2.17 1.168 2.656c.364.485 3.09 4.719 7.487 6.621 1.047.452 1.864.721 2.499.923 1.052.335 2.009.288 2.766.175.843-.127 1.848-.756 2.109-1.45.261-.693.261-1.288.184-1.413-.076-.124-.28-.198-.592-.354z"/>
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
