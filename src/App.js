// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebRoutes from "./components/webroutes.component";

function App() {
  return (
    <>
      <Router>
        <WebRoutes/>
      </Router>
    </>
  );
}

export default App;
