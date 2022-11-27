import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

export const Private = ({Component}) => {
    const auth = !!Cookies.get("token");

    return auth ? <Component /> : <Navigate to="/admin" />
}
