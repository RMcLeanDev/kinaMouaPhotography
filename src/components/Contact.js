import react, {useRef, useState} from 'react';
import "../scss/ContactMe.scss";
import emailjs from 'emailjs-com';

function Contact(){

    const form = useRef();

    const [alert, setAlert] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_g2z8q1p', form.current, process.env.REACT_APP_EMAILJS)
          .then((result) => {
            setAlert(<h1>Thank you for your inquiry! I will reach out to you ASAP!</h1>)
        }, (error) => {
            setAlert(<p>{error.text}</p>)
        });

      };

    return(
        <div className="contactMe">
            <div>
                <h1>Contact</h1>
                <hr/>
                <form ref={form} onSubmit={sendEmail}>
                    {alert}
                    <input type="text" name="from_name" required placeholder="Name:" disable/>
                    <input type="email" name="reply_to" required placeholder="Email:" disable/>
                    <textarea name="message" placeholder="Message:" disable/>
                    <button type="submit" value="Send" required disable> Send </button>
                </form>
                <hr/>
            </div>
        </div>
    )
}

export default Contact;