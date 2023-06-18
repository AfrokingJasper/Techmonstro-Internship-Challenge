import "./Contact.css";
import ContactForm from "./ContactForm";
import { AiFillTwitterSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const contactType = [
  {
    icon: MdEmail,
    type: "email",
    info: "fortuneoliseyenum12@gmail.com",
    link: "mailto:fortuneoliseyenum12@gmail.com",
  },
  {
    icon: AiFillTwitterSquare,
    type: "Twitter",
    info: "fortune oliseyenum",
    link: "https://twitter.com/TheLightHouseT5",
  },
  {
    icon: BsWhatsapp,
    type: "Linkedin",
    info: "fortune oliseyenum",
    link: "https://api.whatsapp.com/send?phone=2349060955362",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact__section">
      <div className="contact__content-container">
        {/* Contact heading */}
        <div>
          <span>Want to Learn more about Chess?</span>
          <h1>Contact me</h1>
        </div>
        <div className="contact__content">
          {/* socials list */}
          <ul className="contact__content-left">
            {contactType.map((type) => (
              <li key={type.type}>
                <type.icon />
                <h4>{type.type}</h4>
                <p>{type.info}</p>
                <a
                  href={`${type.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link"
                >
                  send a message
                </a>
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
