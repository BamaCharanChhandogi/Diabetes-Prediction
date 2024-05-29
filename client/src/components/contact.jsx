import React from "react";
import image from '../assets/contact-form.jpg'

const styles = {

  containerContact: {
    width: '90%',
    maxWidth: '1000px',
    height: 'auto',
    margin: '50px auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    overflow: 'hidden',
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1Img: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '20px',
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    color: '#3c3e41',
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
    fontSize: "24px"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    width: '100%',
    maxWidth: '100%',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #ddd',
    fontSize: '16px',
    background: '#fff',
    transition: 'all 0.3s ease',
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
    outline: 'none',
  },
  inputFocus: {
    borderColor: '#7666c6',
    boxShadow: '0 0 10px rgba(118, 102, 198, 0.2)',
  },
  textarea: {
    width: '100%',
    maxWidth: '100%',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #ddd',
    fontSize: '16px',
    background: '#fff',
    transition: 'all 0.3s ease',
    resize: 'none',
    outline: 'none',
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
  },
  submitButton: {
    marginTop: '20px',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#7666c6',
    color: 'white',
    transition: 'background-color 0.3s ease',
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
  },
  submitButtonHover: {
    backgroundColor: '#5d50a0',
  },
  poppinsExtrabold: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
  }
};

const ContactUs = () => {
  return (
    <div style={styles.containerContact}>
      <div style={styles.box1}>
        <img src={image} alt="contact-form" style={styles.box1Img} />
      </div>
      <div style={styles.box2}>
        <h2 style={styles.heading}>Get in touch!</h2>
        <form style={styles.form}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            style={styles.input}
            className="poppinsExtrabold"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={styles.input}
            className="poppinsExtrabold"
            required
          />
          <textarea
            rows="8"
            id="message"
            placeholder="Message"
            style={styles.textarea}
            className="poppinsExtrabold"
            required
          />
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
            className="poppinsExtrabold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
