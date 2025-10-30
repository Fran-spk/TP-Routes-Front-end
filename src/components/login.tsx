import '../App.css';
import { useNavigate } from "react-router-dom";

interface Props {
  login: () => void;
}

export const Login = ({ login }: Props) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();              
    navigate("/home");    
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input type="email" />
      <input type="password" />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};