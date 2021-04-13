import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      Devloped by{" "}
      <a
        href="https://www.linkedin.com/in/garvitgupta13/"
        className="link"
        target="blank"
      >
        Garvit Gupta
      </a>{" "}
      using{" "}
      <a href="https://developer.musixmatch.com/" className="link">
        MusicMatch API
      </a>
    </footer>
  );
}
