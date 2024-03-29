import SendEmail from "../../components/SendEmail";
import ContactForm from "../../routes/contact/ContactForm"
const ContactPreview = () => {
  return (
    <article className="contact">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <p className="white-text p-tag">
        If you are interested to hire me I am always open to new opportunities
      and if you want to learn something new from me then 
        Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <SendEmail />
      <ContactForm/>
    </article>
  );
};

export default ContactPreview;
