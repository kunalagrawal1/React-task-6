import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
        <h1>Kunal Agrawal</h1>
        <p>Mern Full Stack Intern</p>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        <a href="https://drive.google.com/file/d/1dH4uwYcpou0woXFYHxh2MUErO4Gc-Kcf/view?usp=sharing">
          Resume
        </a>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" /> <br />
          <input type="email" placeholder="Your Email" />
          <br />
          <textarea placeholder="Your Message"></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
