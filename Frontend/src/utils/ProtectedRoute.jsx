import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    let {user} = useContext(AuthContext)

    if (!user){
        console.log("No User Authenticated")
        return <Navigate to="/Signin" replace />
    }

    return children
}

export default ProtectedRoute