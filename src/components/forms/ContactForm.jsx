import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import emailjs from "emailjs-com";

// Ui
import IpnutFloating from "./inputs/IpnutFloating";
import TextareaFloating from "./inputs/TextareaFloating";
import Checkbox from "./inputs/Checkbox";

// Icons - for alert after submitting form
import { MdInfo, MdError } from "react-icons/md";

export default function ContactForm() {
  // Refs
  const refHoneypot = useRef(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current.value;

    if (honeypot === "" || honeypot === null) {
      emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
        (result) => {
          setmailSent(true);
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          setFormError(true);
          setIsLoading(false);
        }
      );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      className="ui-form-filled space-y-6"
      aria-label="Kontaktní formulář"
    >
      <IpnutFloating
        type="text"
        name="name"
        id="name"
        label="Jméno a příjmení"
        isInputRequired={true}
      />

      {/* Honeypot - anti spam */}
      <div className="input-hp">
        <input
          type="text"
          placeholder="surname"
          id="surname"
          ref={refHoneypot}
        />
        <label htmlFor="website">Příjmení</label>
      </div>
      {/* ---- Honeypot - anti spam ---- */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <IpnutFloating
          type="mail"
          name="mail"
          id="mail"
          label="E-mail"
          isInputRequired={true}
        />

        <IpnutFloating
          type="tel"
          name="tel"
          id="tel"
          label="Telefon"
          isInputRequired={false}
        />
      </div>

      <TextareaFloating
        name="message"
        id="message"
        cols="30"
        rows="10"
        label="Vaše zpráva"
        isInputRequired={true}
      />

      <Checkbox id="gdpr" isInputRequired={true}>
        Souhlasím s podmínkami
        <Link href="/gdpr" className="ui-link-2 text-primary font-normal ml-1">
          ochrany osobních údajů.
        </Link>
      </Checkbox>

      <br />

      <button
        type="submit"
        data-loading={isLoading ? true : false}
        className="ui-button"
        variant="outline-expand"
      >
        <span>Odeslat</span>
      </button>

      <div>
        {mailSent ? (
          <div className="ui-alert text-success flex items-center">
            <MdInfo className="text-3xl mr-3 sm:mr-5" />
            <span>E-mail byl úspěšně odeslán</span>
          </div>
        ) : null}

        {formError ? (
          <div className="ui-alert text-error flex items-center">
            <MdError className="text-3xl mr-3 sm:mr-5" />
            <span>E-mail nebyl odeslán, zkuste to prosím znovu.</span>
          </div>
        ) : null}
      </div>
    </form>
  );
}
