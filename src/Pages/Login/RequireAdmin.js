import React  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { signOut } from "firebase/auth";
import auth from "../../Firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;