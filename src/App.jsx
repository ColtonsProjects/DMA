import { useState } from 'react';
import marketingLogo from './assets/steps.png'; // Replace with your agency's logo
import './App.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <img src={marketingLogo} className="app-logo" alt="Agency logo" />
        <h1>Welcome to [Your Agency's Name]</h1>
        <p>Leading the Digital Marketing Revolution</p>
      </header>
      
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Search Engine Optimization</li>
          <li>Social Media Management</li>
          <li>Content Creation & Strategy</li>
          <li>Pay-Per-Click Advertising</li>
          <li>Web Design & Development</li>
        </ul>
      </section>

      <section className="visitor-counter">
        <button onClick={() => setVisitorCount(visitorCount + 1)}>
          Visitor Count: {visitorCount}
        </button>
        <p>Be part of our growing community!</p>
      </section>

      <footer className="app-footer">
        <p>Contact us: info@youragency.com</p>
        <p>Follow us on social media for the latest updates.</p>
      </footer>
    </div>
  );
}

export default App;
