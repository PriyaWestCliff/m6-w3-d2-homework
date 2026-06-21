import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <h2>TV APPS</h2>

        <Link to="/Netflix">
          <img
            className="nf"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix"
          />
        </Link>

        <Link to="/HBO Max">
          <img
            className="hb"
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
            alt="HBO Max"
          />
        </Link>

        <Link to="/Hulu">
          <img
            className="hu"
           // src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" Original URL from medialist.txt not working
            src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png"
            alt="Hulu"
          />
        </Link>

        <Link to="/Prime Video">
          <img
            className="pr"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime Video"
          />
        </Link>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}


function Child() {
  let { id } = useParams();

  return (
    <h3>
      You Selected:<span>{id}</span>
    </h3>
  );
}