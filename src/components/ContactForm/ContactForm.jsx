import React, { useState } from "react";
import "./ContactForm.css";

const initialState = { name: "", email: "", message: "" };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Введіть ім’я";
  if (!form.email.trim()) errors.email = "Введіть email";
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = "Некоректний email";
  if (!form.message.trim()) errors.message = "Введіть повідомлення";
  return errors;
};

const icons = {
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5C19 16 16 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  ),
  message: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const fieldConfig = [
  {
    name: "name",
    type: "text",
    label: "Ваше ім’я",
    placeholder: "Напишіть ім’я",
    icon: icons.user,
    autoComplete: "name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "name@email.com",
    icon: icons.mail,
    autoComplete: "email",
  },
];

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [anim, setAnim] = useState(false);

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSent(true);
    setAnim(true);
    setTimeout(() => setAnim(false), 600);
    setTimeout(() => setSent(false), 3000);
    setForm(initialState);
    setTouched({});
  };

  const renderError = (field) =>
    touched[field] && errors[field] ? (
      <p id={`${field}-error`} className="input-error-text">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section className="contact-section" id="contacts">
      <div className="contact-section__header">
        <p className="contact-eyebrow contact-section__eyebrow">
          Форма зв’язку
        </p>
        <h2>Зворотній зв’язок</h2>
        <p className="contact-section__lead">
          Залиште коротке повідомлення — ми повернемось із відповіддю протягом
          15 хвилин у робочий час.
        </p>
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        {fieldConfig.map(
          ({ name, type, label, placeholder, icon, autoComplete }) => {
            const hasError = touched[name] && errors[name];
            return (
              <div className="input-group" key={name}>
                <label htmlFor={`contact-${name}`} className="input-label">
                  {label}
                </label>
                <div className={`input-field${hasError ? " error" : ""}`}>
                  <span className="input-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <input
                    id={`contact-${name}`}
                    className="input-control"
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    aria-invalid={hasError || undefined}
                    aria-describedby={hasError ? `${name}-error` : undefined}
                    autoComplete={autoComplete}
                    required
                  />
                </div>
                {renderError(name)}
              </div>
            );
          }
        )}

        <div className="input-group input-group--textarea">
          <label htmlFor="contact-message" className="input-label">
            Ваше повідомлення
          </label>
          <div
            className={`input-field${
              touched.message && errors.message ? " error" : ""
            }`}
          >
            <span className="input-icon" aria-hidden="true">
              {icons.message}
            </span>
            <textarea
              id="contact-message"
              className="input-control input-control--textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Опишіть свою ситуацію, щоб ми могли підготувати рішення"
              aria-invalid={
                touched.message && errors.message ? "true" : undefined
              }
              aria-describedby={
                touched.message && errors.message ? "message-error" : undefined
              }
              required
            />
          </div>
          {renderError("message")}
        </div>

        <div className="contact-form__actions">
          <button type="submit" disabled={!isValid}>
            Відправити
          </button>
          <div
            className={`contact-success${sent ? " show" : ""}${
              anim ? " anim" : ""
            }`}
            role="status"
            aria-live="polite"
          >
            Дякуємо! Ваше повідомлення надіслано.
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;