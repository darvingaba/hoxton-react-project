import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Planner</div>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </header>
      <main></main>

      <footer>
        <div className="footer-content">
          <div className="footer-title title">Planner</div>
          <div className="footer-description">
            <p>
              Planner is a web application that allows you to book a hotel and
              manage your personal holidays.
            </p>
          </div>
          <div className="footer-email">
            <input type="email" className="footer-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="footer-social">
            <a className="footer-links" href="https://www.facebook.com/">
              <img src="./src/img/facebook.svg" alt="facebook" />
            </a>
            <a className="footer-links" href="https://www.instagram.com/">
              <img src="./src/img/instagram.svg" alt="instagram" />
            </a>
            <a className="footer-links" href="https://www.twitter.com/">
              <img src="./src/img/twitter.svg" alt="twitter" />
            </a>
            <a className="footer-links" href="https://www.linkedin.com/">
              <img src="./src/img/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App


