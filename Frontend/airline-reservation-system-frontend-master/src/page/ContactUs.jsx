import "../styles/ContactUsStyle.css";


const ContactUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
       <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Message" />
        <textarea placeholder="Write your message here" rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
