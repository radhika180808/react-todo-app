import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <TodoApp />
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;