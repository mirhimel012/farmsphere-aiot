
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AUTH_KEY = "farmsphere-dashboard-unlocked";

export default function ProtectedRoute() {
  const location = useLocation();
  const isUnlocked = sessionStorage.getItem(AUTH_KEY) === "true";

  if (!isUnlocked) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
