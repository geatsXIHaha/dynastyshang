import './Pages.css'

const Contact = () => {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>联系 · Contact</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>Get In Touch</h2>
          <p>
            If you have questions, suggestions, or would like to learn more about
            the Shang Dynasty, feel free to reach out.
          </p>
        </section>

        <section className="section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>info@shangdynasty.com</p>
            </div>
            <div className="contact-item">
              <h3>📱 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>Beijing, China</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Follow Us</h2>
          <p>
            Stay updated with the latest discoveries and articles about the Shang Dynasty.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
