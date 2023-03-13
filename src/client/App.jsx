import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Welcome from './components/Welcome/Welcome';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <Welcome />
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          {/* Testing env variable - https://vitejs.dev/guide/env-and-mode.html#env-files */}
          <p>SVG path: {`${import.meta.env.VITE_SVG_PATH}`}</p>
          <p>
            <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className={styles['App-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Routes>
            <Route path="/about" element={<main>About</main>}></Route>
            <Route path="/" element={<main>Home</main>}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
