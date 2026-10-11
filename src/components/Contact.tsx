import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal } from './motion/Reveal.tsx';
import { CINEMATIC_EASE } from './motion/constants.ts';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'fishSales',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال الاسم الكريم.' : 'Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال رقم الهاتف.' : 'Please enter your phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage(lang === 'ar' ? 'يرجى كتابة تفاصيل الاستفسار.' : 'Please write your message.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'fishSales',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'قنوات الاتصال المباشرة' : 'Direct Inquiries'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Location Column (5 cols) */}
          <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#003454]/60 border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">
                {t.contact.contactInfoTitle}
              </h3>

              <div className="space-y-5 text-sm text-white/80">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t.contact.locationTitle}</h4>
                    <p className="text-xs sm:text-sm text-white/70 mt-0.5">{t.contact.locationDesc}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{lang === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Official Email'}</h4>
                    <a
                      href={`mailto:${ASSETS.contact.email}`}
                      className="text-xs sm:text-sm text-sky-300 hover:underline mt-0.5 block"
                    >
                      {ASSETS.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{lang === 'ar' ? 'الهاتف المباشر' : 'Telephone'}</h4>
                    <span className="text-xs sm:text-sm font-mono text-white/70 mt-0.5 block">{t.contact.phoneText}</span>
                  </div>
                </div>

                {/* Commercial Registration & Work Hours */}
                <div className="pt-3 border-t border-white/10 text-xs text-white/60 space-y-1">
                  <p>{t.contact.crText}</p>
                  <p>{t.contact.workHours}</p>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#001f33] shadow-lg">
              <div className="p-3 bg-[#00273e] border-b border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="font-semibold">{lang === 'ar' ? 'مزارع الخرج، المملكة العربية السعودية' : 'Al-Kharj Facility Location'}</span>
                <a
                  href={ASSETS.links.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                >
                  <span>{t.contact.openMapBtn}</span>
                  <span className="rtl:rotate-180">→</span>
                </a>
              </div>
              <div className="h-52 w-full relative">
                <iframe
                  title="Al-Kharj Smart Fish Facility Map"
                  src={ASSETS.links.googleMapsEmbed}
                  className="w-full h-full border-0 filter contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Interactive Form Column (7 cols) */}
          <Reveal delay={0.2} className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#003b60]/50 via-[#002c46]/80 to-[#002238] border border-white/10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-8">
              {lang === 'ar' ? 'املأ النموذج وسيقوم مسؤول الحسابات أو الفريق الفني بالتواصل معك' : 'Complete the form below to receive commercial quotations or technical advice'}
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: CINEMATIC_EASE }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-sm text-white/80 max-w-md mb-6 leading-relaxed">
                    {t.contact.successMsg}
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 transition-colors"
                  >
                    {t.contact.resetBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-white/85 mb-1.5">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-white/85 mb-1.5">
                        {t.contact.phoneLabel} *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white/85 mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-medium text-white/85 mb-1.5">
                        {t.contact.inquiryTypeLabel} *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#002238] border border-white/15 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      >
                        <option value="fishSales">{t.contact.inquiryTypes.fishSales}</option>
                        <option value="fingerlingsSales">{t.contact.inquiryTypes.fingerlingsSales}</option>
                        <option value="partnership">{t.contact.inquiryTypes.partnership}</option>
                        <option value="training">{t.contact.inquiryTypes.training}</option>
                        <option value="other">{t.contact.inquiryTypes.other}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-white/85 mb-1.5">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button with Soft Shine Sweep */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="relative overflow-hidden group w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>{t.contact.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <svg className="w-4 h-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
