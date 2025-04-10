import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    title: "Klasifikasi Kematangan Tomat",
    description:
      "Menggunakan model Inception-v3 yang dimodifikasi untuk klasifikasi kematangan tomat dengan akurasi 98.42%.",
    link: "https://github.com/username/tomato-ripeness",
  },
  {
    title: "Prediksi Harga Rumah",
    description:
      "Model regresi menggunakan Random Forest untuk memprediksi harga rumah berdasarkan fitur seperti lokasi dan ukuran.",
    link: "https://github.com/username/house-price-predictor",
  },
  {
    title: "Analisis Sentimen Ulasan Produk",
    description:
      "Model NLP untuk mengklasifikasikan ulasan produk sebagai positif atau negatif menggunakan TF-IDF dan Logistic Regression.",
    link: "https://github.com/username/sentiment-analysis",
  },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <main className="main">
      <div className="container">
        <section className="toggle-section">
          <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </section>

        <section className="intro">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Halo, saya <span className="highlight">Muhammad Faiq Jabbar</span>
          </motion.h1>
          <p className="subtitle">🤖 Machine Learning Enthusiast | 📬 Siap Bekerja</p>
          <div className="social-links">
            <a href="https://github.com/faiqjabbar" target="_blank" rel="noreferrer">
              <button className="link-btn"><Github size={18} /> GitHub</button>
            </a>
            <a href="https://linkedin.com/in/faiqjabbar" target="_blank" rel="noreferrer">
              <button className="link-btn"><Linkedin size={18} /> LinkedIn</button>
            </a>
            <a href="mailto:faiqjabbar.80@gmail.com" target="_blank" rel="noreferrer">
              <button className="link-btn"><Mail size={18} /> Kontak</button>
            </a>
            <a href="/cv-faiqjabbar.pdf" target="_blank" rel="noreferrer">
              <button className="link-btn">📄 CV</button>
            </a>
          </div>
        </section>

        <section>
          <h2 className="section-title">💼 Project Portofolio</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                  🔗 Lihat di GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="footer">
          Created By <strong>Muhammad Faiq Jabbar</strong> &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
