import { Navigate, Outlet } from "react-router-dom";

interface Props{
    isAllowed:boolean,
    redirecTo?: string,
    children?: React.ReactNode
}

export const ProtectedRouter=({isAllowed,redirecTo='/login',children}: Props)=>{
    if(!isAllowed){
        return <Navigate to={redirecTo}></Navigate>
    }
    else{
        return children ? children : <Outlet />;
    }
}