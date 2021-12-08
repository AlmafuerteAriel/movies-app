import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/About";

export function App() {
  return <Router>
    <header className="container">
      <Link to="/">
        <h1 className={styles.title}>My Movies App</h1>
      </Link>
      <Link to="/about">
        <h2 className={styles.about}>About</h2>
      </Link>
    </header>
    <main>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </main>
  </Router>
}
