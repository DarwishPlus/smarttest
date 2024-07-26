export default function Contact() {
  return (
    <>
      <div className="info-container">
        <div className="info">
          <input type="text" placeholder="Full Name"></input>
          <input type="number" placeholder="Phone Number"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Subject"></input>
        </div>
        <div className="info-message">
          <input type="text" placeholder="Message"></input>
          <button>Send</button>
        </div>
      </div>
      <div className="contact-info">
        <div className="info-card">
          <h3>Location</h3>
          <p>
            Al Kazim Building, Floor 1, Office 106, Al Garhoud, Dubai, United
            Arab Emirates
          </p>
        </div>
        <div className="info-card">
          <h3>Work time</h3>
          <p>Every day except Friday from 8 am to 9 pm</p>
        </div>
        <div className="info-card">
          <h3>Our numbers</h3>
          <p className="num">
            <span>Whatsapp: 0427287000</span>
            <span>Phone:0427287000</span>
            <span>Phone: 0427287000</span>
          </p>
        </div>
      </div>
    </>
  );
}
