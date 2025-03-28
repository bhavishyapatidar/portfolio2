import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeveloperById,
  selectDeveloper,
  selectPortfolioStatus,
  selectPortfolioError,
} from "./portfolioReducer";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const dispatch = useDispatch();
  const developer = useSelector(selectDeveloper);
  const status = useSelector(selectPortfolioStatus);
  const error = useSelector(selectPortfolioError);

  useEffect(() => {
    dispatch(fetchDeveloperById("d001"));
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          if (!section.classList.contains("animated")) {
            section.classList.add("animated", "fade-in");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [developer]);

  // 🛑 Handle loading and error states
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!developer) return <p>No developer data found.</p>;

  // ✅ Ensure `colors` exists
  const { colors = {} } = developer;

  return (
    <div
      className="min-h-screen"
      style={{
        "--color-primary": colors.primary || "#000",
        "--color-secondary": colors.secondary || "#fff",
        "--color-accent": colors.accent || "#f00",
        "--color-light-bg": colors.lightBg || "#f4f4f4",
        "--color-dark-text": colors.darkText || "#333",
      }}
    >
      <Header developer={developer} />
      <main>
        <Hero developer={developer} />
        <About developer={developer} />
        <Skills developer={developer} />
        <Experience developer={developer} />
        <Projects developer={developer} />
        <Contact developer={developer} />
      </main>
    </div>
  );
};

export default App;
