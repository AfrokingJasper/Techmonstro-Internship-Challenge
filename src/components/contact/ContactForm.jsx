import { useRef, useState, useEffect } from "react";
import "./ContactForm.css";

// setting functions to validate each of the inputs
const nameValidation = (fullname) => fullname.split(" ").length > 1;
const emailValidation = (email) => email.includes("@");
const messageValidation = (message) => message.split(" ").length > 0;

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [inputValidity, setInputValididty] = useState({
    name: true,
    email: true,
    message: true,
  });

  // assigning each inputs for a ref using the useRef() hook to monitor the values and changes in each input
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  // the confirm handler function helps to validate and submit the form only if it passes all the given requirements
  const confirmHandler = (event) => {
    event.preventDefault();

    // assigning the values of the inputs to a variable for validation
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    // checking if the values of each inputs is valid
    const enteredNameIsValid = nameValidation(enteredName);
    const enteredEmailIsValid = emailValidation(enteredEmail);
    const enteredMessageIsValid = messageValidation(enteredMessage);

    // setting the state of the inputValidity to the current value of each inputs
    setInputValididty({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    // making sure that all inputs are valid before submitting the form by assigning all of them at once to a variable which returns true or false
    const formIsValid =
      enteredEmailIsValid && enteredNameIsValid && enteredMessageIsValid;

    // checking if the overall form is valid and changing the state of the error and success message
    if (!formIsValid) {
      setSuccess(false);
      setError(true);
      return;
    }

    setSuccess(true);
    setError(false);
  };

  // setting a timeout with useEffect to clear the success message after 2.5 seconds and reset the form inputs
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        messageInputRef.current.value = "";
      }, 2500); // Timeout duration in milliseconds (3 seconds in this example)

      return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
    }
  }, [success]);

  const nameStyle = !inputValidity.name ? "error" : "";
  const emailStyle = !inputValidity.email ? "error" : "";
  const messageStyle = !inputValidity.message ? "error" : "";

  return (
    <form onSubmit={confirmHandler} className="contact__form">
      <div className={nameStyle}>
        <input
          type="text"
          placeholder="Your Fullname"
          ref={nameInputRef}
          required
        />
        {!inputValidity.name && (
          <p>Please enter your first name and surnname</p>
        )}
      </div>
      <div className={emailStyle}>
        <input
          type="email"
          placeholder="Your Email"
          ref={emailInputRef}
          required
        />
        {!inputValidity.email && <p>Please enter a valid email</p>}
      </div>
      <div className={messageStyle}>
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          ref={messageInputRef}
          required
        ></textarea>
        {!inputValidity.message && <p>please enter a valid message</p>}
      </div>
      {success && (
        <em className="success__message">Message sent successfully</em>
      )}
      {error && (
        <p>Something went wrong Please fill form correctly and try again</p>
      )}
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
