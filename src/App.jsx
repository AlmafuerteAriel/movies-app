import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
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
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </main>
  </Router>
}
