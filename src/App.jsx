import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">
          <p className="name">Lucas Maesaka</p>
          <p className="description">Solutions Developer</p>
        </div>
        <a href="/resume_lucas_maesaka.pdf" download className="downloadcv">
          Download my CV
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="contact">
        <p className="contact-title">Contact</p>
        <div className="contact-grid">
          <div className="contact-item">
            <p className="contact-label">Email</p>
            <a href="mailto:lucasmsk11@gmail.com">lucasmsk11@gmail.com</a>
          </div>

          <div className="contact-item">
            <p className="contact-label">Phone</p>
            <a href="tel:+5511976554986">+55 11 9 7655-4986</a>
          </div>

          <div className="contact-item">
            <p className="contact-label">GitHub</p>
            <a href="https://github.com/hidekimaesaka" target="_blank">
              github.com/hidekimaesaka
            </a>
          </div>

          <div className="contact-item">
            <p className="contact-label">LinkedIn</p>
            <a href="https://www.linkedin.com/in/lucasmaesaka/" target="_blank">
              linkedin.com/in/lucasmaesaka
            </a>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-content">
          <p class="footer-copy">© 2026</p>
          <p class="footer-name">Lucas Maesaka</p>
        </div>
      </footer>
    </div>
  );
}
