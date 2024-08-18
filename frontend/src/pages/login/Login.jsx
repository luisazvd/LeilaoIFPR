import React from "react";
import { Card } from 'primereact/card';
import "./Login.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="login-container">
            <Card title={<span><FontAwesomeIcon icon={faHorse} className="icon-ferradura" /> Login</span>} className="login-card">
                <div className="p-field">
                    <label htmlFor="username">E-mail</label>
                    <InputText id="username" placeholder="Digite seu email" className="p-inputtext-sm" />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Senha</label>
                    <Password id="password" placeholder="Digite sua senha" feedback={false} toggleMask inputClassName="password-input" />
                </div>
                <Button label="Recuperar Senha" className="p-button-link" onClick={() => window.location.href= '/recover'} />
                <Button label="Login" className="p-button-raised p-button-rounded login-button" />
            </Card>
            <Button label="Cadastre-se" className="p-button-raised p-button-rounded register-button" onClick={() => window.location.href = '/register'} />
        </div>
    );
}

export default Login;