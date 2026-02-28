import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  return (
    <BrowserRouter>
      <header style={{ padding: "1rem", background: "#f4f4f4" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main>
        <ErrorBoundary fallback={<h2>Something went wrong loading the page.</h2>}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<h1 style={{ padding: "2rem" }}>Welcome Home</h1>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </BrowserRouter>
  );
};

export default App;