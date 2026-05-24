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
  const [careType, setCareType] = useState('');
  const [shift, setShift] = useState('');
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
    if (!careType) {
      setErrorMsg('Please select the type of care required.');
      return;
    }
    if (!shift) {
      setErrorMsg('Please select your preferred shift.');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message with markdown bolding
    const message = `*New Care Inquiry (Isham Care)*

*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Care Required:* ${careType}
*Preferred Shift:* ${shift}
*Additional Details:* ${extraDetails.trim() ? extraDetails.trim() : 'None provided'}`;

    // Clean recipient phone number (remove +, spaces, hyphens)
    const whatsappNum = details.whatsapp ? details.whatsapp.replace(/[^0-9]/g, '') : '94772420800';

    try {
      // Execute redirection to WhatsApp Web / App
      window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
      setIsSubmitted(true);
    } catch {
      setErrorMsg('Could not redirect to WhatsApp automatically. Please contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#FAF6F0] dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="container-custom">
        
        {/* Main Banner Block */}
        <div className="bg-[#0F172A] rounded-2xl overflow-hidden border border-[#0F172A]/5 dark:border-white/5">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Contact Details Column */}
            <aside className="lg:col-span-2 p-10 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="heading-serif text-3xl font-bold mb-4">{contact.heading}</h3>
                <p className="text-white/40 mb-10 leading-relaxed">
                  {contact.description}
                </p>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#C4A882]/10 p-2.5 rounded-lg shrink-0">
                      <Phone className="w-5 h-5 text-[#C4A882]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 font-medium uppercase tracking-wider">{details.phoneLabel}</p>
                      <p className="font-semibold text-white/80 mt-0.5">{details.phone}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  {details.whatsapp && (
                    <div className="flex items-start gap-4">
                      <div className="bg-[#C4A882]/10 p-2.5 rounded-lg shrink-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-5 h-5 text-[#C4A882]"
                          aria-hidden="true"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-medium uppercase tracking-wider">{details.whatsappLabel}</p>
                        <p className="font-semibold text-white/80 mt-0.5">{details.whatsapp}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#C4A882]/10 p-2.5 rounded-lg shrink-0">
                      <Mail className="w-5 h-5 text-[#C4A882]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 font-medium uppercase tracking-wider">{details.emailLabel}</p>
                      <p className="font-semibold text-white/80 mt-0.5">{details.email}</p>
                    </div>
                  </div>
                  
                  {/* Location / Area */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#C4A882]/10 p-2.5 rounded-lg shrink-0">
                      <MapPin className="w-5 h-5 text-[#C4A882]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 font-medium uppercase tracking-wider">{details.locationLabel}</p>
                      <p className="font-semibold text-white/80 mt-0.5">{details.location}</p>
                      {details.locationDetails && (
                        <p className="text-sm text-white/25 mt-1 leading-relaxed">{details.locationDetails}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form Column */}
            <div className="lg:col-span-3 p-10 md:p-12 bg-white dark:bg-[#161F30] flex flex-col justify-center transition-colors duration-300">
              {isSubmitted ? (
                /* Success View with Animation */
                <div 
                  className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-500"
                >
                  <div className="inline-flex bg-[#C4A882]/10 p-4 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-[#C4A882]" />
                  </div>
                  <h4 className="heading-serif text-2xl font-bold text-[#0F172A] dark:text-slate-100 mb-2">Request Submitted!</h4>
                  <p className="text-[#0F172A]/50 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F172A] dark:text-slate-100">{name}</strong>. I have received your request and will get back to you at <strong className="text-[#0F172A] dark:text-slate-100">{phone}</strong> within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setCareType('');
                      setShift('');
                      setExtraDetails('');
                    }}
                    className="mt-8 text-[#C4A882] hover:text-[#B89B75] font-semibold flex items-center justify-center gap-1 mx-auto cursor-pointer transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* Booking Form View */
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div 
                      className="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-lg border border-red-100 dark:border-red-950/30 text-sm font-medium"
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
                        className="block text-xs font-medium uppercase tracking-wider text-[#0F172A]/40 dark:text-slate-400 mb-2"
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
                        className="w-full form-input"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="contact-phone" 
                        className="block text-xs font-medium uppercase tracking-wider text-[#0F172A]/40 dark:text-slate-400 mb-2"
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
                        className="w-full form-input"
                      />
                    </div>
                  </div>

                  {/* Care Required and Shift Selection */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="contact-care-type" 
                        className="block text-xs font-medium uppercase tracking-wider text-[#0F172A]/40 dark:text-slate-400 mb-2"
                      >
                        Care Required For
                      </label>
                      <div className="relative">
                        <select 
                          id="contact-care-type"
                          value={careType}
                          onChange={(e) => setCareType(e.target.value)}
                          className={`w-full form-input appearance-none cursor-pointer ${
                            careType ? 'text-[#0F172A] dark:text-slate-100' : 'text-[#0F172A]/30 dark:text-slate-400/50'
                          }`}
                        >
                          <option value="" disabled hidden>Select care required...</option>
                          {form.servicesOptions.map((opt, oIdx) => (
                            <option key={oIdx} value={opt} className="text-[#0F172A] dark:text-slate-900">{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label 
                        htmlFor="contact-shift" 
                        className="block text-xs font-medium uppercase tracking-wider text-[#0F172A]/40 dark:text-slate-400 mb-2"
                      >
                        Preferred Shift
                      </label>
                      <div className="relative">
                        <select 
                          id="contact-shift"
                          value={shift}
                          onChange={(e) => setShift(e.target.value)}
                          className={`w-full form-input appearance-none cursor-pointer ${
                            shift ? 'text-[#0F172A] dark:text-slate-100' : 'text-[#0F172A]/30 dark:text-slate-400/50'
                          }`}
                        >
                          <option value="" disabled hidden>Select preferred shift...</option>
                          {form.shiftOptions.map((opt, oIdx) => (
                            <option key={oIdx} value={opt} className="text-[#0F172A] dark:text-slate-900">{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional details */}
                  <div>
                    <label 
                      htmlFor="contact-details" 
                      className="block text-xs font-medium uppercase tracking-wider text-[#0F172A]/40 dark:text-slate-400 mb-2"
                    >
                      Additional Details
                    </label>
                    <textarea 
                      id="contact-details"
                      rows={4} 
                      value={extraDetails}
                      onChange={(e) => setExtraDetails(e.target.value)}
                      placeholder="Briefly describe the current situation and any specific requirements..."
                      className="w-full form-input resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 rounded-lg font-bold"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {form.submitCta} <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-[#0F172A]/25 dark:text-slate-500 mt-4">
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
