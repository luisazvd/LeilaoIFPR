import React, {useState} from "react";
import { Card } from 'primereact/card';
import "./Login.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [usuario, setUsuario] = useState({email: "", senha: ""});
    const navigate = useNavigate();

    const handleChange = (input) =>{
        setUsuario({...usuario, [input.target.name]:input.target.value});
    }

    const login = () =>{
        if (usuario.email === "email@email.com" && usuario.password === "123"){
        let token="token do backend"
        localStorage.setItem("token", token);
        localStorage.setItem("email", usuario.email);
        navigate("/");
        } else {
            alert("usuario ou senha incorreta");
        }
    }


    return (
        <div className="login-container">
            <Card title={<span><FontAwesomeIcon icon={faHorse} className="icon-ferradura" /> Login</span>} className="login-card">
                <div className="p-field">
                    <label htmlFor="username">E-mail</label>
                    <InputText onChange={handleChange} name="email" id="username" placeholder="Digite seu email" className="p-inputtext-sm" />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Senha</label>
                    <Password onChange={handleChange} name="password" id="password" placeholder="Digite sua senha" feedback={false} toggleMask inputClassName="password-input" />
                </div>
                <Button label="Recuperar Senha" className="p-button-link" onClick={() => window.location.href= '/recover'} />
                <Button onClick={login} label="Login" className="p-button-raised p-button-rounded login-button" />  
                <Button label="Cadastre-se" className="p-button-link" onClick={() => window.location.href = '/register'} />
            </Card>
        </div>
    );
}

export default Login;