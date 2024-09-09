import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'primereact/divider';
import "./Register.css";

const Register = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setIsPasswordMatch(value === password);
    };

    const header = <div className="font-bold mb-3">Escolha uma senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Requisitos da senha:</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Mínimo de 6 caracteres</li>
                <li>1 letra maiúscula</li>
                <li>1 letra minúscula</li>
                <li>1 número</li>
                <li>1 caractere especial</li>
            </ul>
        </>
    );

    return (
        <div className="register-container">
            <Card title={<span><FontAwesomeIcon icon={faHorse} className="icon-horse" /> Novo Cadastro</span>} className="register-card">
                <div className="p-field">
                    <label htmlFor="name">Nome</label>
                    <InputText id="name" placeholder="Digite seu nome" className="p-inputtext-sm" />
                </div>
                <div className="p-field">
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" placeholder="Digite seu e-mail" className="p-inputtext-sm" />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Senha</label>
                    <Password
                        id="password"
                        value={password}
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        header={header}
                        footer={footer}
                        toggleMask
                        inputClassName="password-input"
                        promptLabel="Digite uma senha"
                        weakLabel="Fraca"
                        mediumLabel="Média"
                        strongLabel="Forte"
                    />
                </div>
                <div className="p-field">
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <Password
                        id="confirm-password"
                        value={confirmPassword}
                        placeholder="Confirme sua senha"
                        onChange={handleConfirmPasswordChange}
                        toggleMask
                        inputClassName={`password-input ${isPasswordMatch ? '' : 'p-invalid'}`}
                        feedback={false}
                    />
                    {!isPasswordMatch && <small className="p-error">As senhas não coincidem</small>}
                </div>
                <Button label="Cadastrar-se" className="p-button-raised p-button-rounded register-button" />
                <Button label="Cancelar" className="p-button-link cancel-button" onClick={() => window.location.href = '/login'} />
            </Card>
        </div>
    );
}

export default Register;
