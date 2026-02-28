import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = lazy(() => import("./page/Dashboard"));
const Settings = lazy(() => import("./page/Settings"));
const Profile = lazy(() => import("./page/Profile"));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* 2. Suspense ловит процесс загрузки файлов страниц */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;