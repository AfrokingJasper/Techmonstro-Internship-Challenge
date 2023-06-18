import "./Contact.css";

const contactType = [
  {
    icon: "icon",
    type: "email",
    info: "fortuneoliseyenum12@gmail.com",
  },
  {
    icon: "icon",
    type: "Twitter",
    info: "fortune oliseyenum",
  },
  {
    icon: "icon",
    type: "Linkedin",
    info: "fortune oliseyenum",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact__section">
      <div className="contact__content-container">
        <div>
          <p>Want to Learn more about Chess?</p>
          <h1>Contact me</h1>
        </div>
        <div className="contact__content">
          <ul className="contact__content-left">
            {contactType.map((type) => (
              <li key={type.type}>
                <p>{type.icon}</p>
                <h4>{type.type}</h4>
                <p>{type.info}</p>
                <a href="#hello" className="contact__link">
                  send a message
                </a>
              </li>
            ))}
          </ul>
          <form className="contact__form">
            <input type="text" placeholder="Your Fullname" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
