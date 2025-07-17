import React, { useState } from "react";
import './ContactForm.css';

const initialState = { name: '', email: '', message: '' };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Введіть ім’я';
  if (!form.email.trim()) errors.email = 'Введіть email';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Некоректний email';
  if (!form.message.trim()) errors.message = 'Введіть повідомлення';
  return errors;
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [anim, setAnim] = useState(false);

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleBlur = e => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid) return;
    setSent(true);
    setAnim(true);
    setTimeout(() => setAnim(false), 600);
    setTimeout(() => setSent(false), 3000);
    setForm(initialState);
    setTouched({});
  };

  return (
    <section className="contact-section contact-section-dark" id="contacts">
      <h2>Зворотній зв’язок</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
        <div className="input-group">
          <span className="input-icon" aria-hidden="true">👤</span>
          <input type="text" name="name" placeholder="Ваше ім’я" value={form.name} onChange={handleChange} onBlur={handleBlur} aria-label="Ім’я" className={touched.name && errors.name ? 'input-error' : ''} required />
        </div>
        {touched.name && errors.name && <div className="input-error-text">{errors.name}</div>}
        <div className="input-group">
          <span className="input-icon" aria-hidden="true">✉️</span>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} onBlur={handleBlur} aria-label="Email" className={touched.email && errors.email ? 'input-error' : ''} required />
        </div>
        {touched.email && errors.email && <div className="input-error-text">{errors.email}</div>}
        <div className="input-group">
          <span className="input-icon" aria-hidden="true">💬</span>
          <textarea name="message" placeholder="Ваше повідомлення" value={form.message} onChange={handleChange} onBlur={handleBlur} aria-label="Повідомлення" className={touched.message && errors.message ? 'input-error' : ''} required />
        </div>
        {touched.message && errors.message && <div className="input-error-text">{errors.message}</div>}
        <button type="submit" disabled={!isValid} className={isValid ? '' : 'btn-disabled'}>Відправити</button>
        <div className={`contact-success${sent ? ' show' : ''}${anim ? ' anim' : ''}`}>Дякуємо! Ваше повідомлення надіслано.</div>
      </form>
    </section>
  );
};

export default ContactForm; 