import React  from "react";
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5493c975-a605-4b56-859f-f3e9e262439a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Work Together!</h1>
                      <p>If you have a project or idea, feel free to reach out. I’d love to collaborate.</p>
                       <div className="contact-details">
                           <div className="contact-detail">
                          <img src={mail_icon} alt=""/> <p>anjali720gupta@gmail.com</p>
                    </div>
                      <div className="contact-detail">
                  <img src={location_icon} alt=""/> <p>New Delhi, India</p>
              </div>
            <div className="contact-detail">
            <img src={call_icon} alt=""/> <p>+91 9219011087</p>
            
          </div>
          </div>
                </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea placeholder="Enter your message" name='message' rows='8'></textarea>
                <button type="submit" className="contact-submit">Submit now</button>
            </form>
        </div>
        </div>
    )
}

export default Contact