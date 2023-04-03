import { useLocation, Navigate, Form } from "react-router-dom"

const auth = ()=> {
    const user = { email: correo, id:14, rol:cocinero, }
    return user.id === 15;
}

const RequireAuth= ({children}) => {
    const location = useLocation();
    const authenticated = auth();
    return authenticated ? (
        children
    ) : (
        <Navigate to='/login' state={{form: location}}/>
    )
 
}

export default RequireAuth;