import React, { useState } from "react";
import { Card } from 'primereact/card';
import "./AlterPassword.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'primereact/divider';
import { InputOtp } from 'primereact/inputotp'; 

const AlterPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [otp, setOtp] = useState(""); 
    const header = <h6>Requisitos da senha</h6>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">A senha deve conter:</p>
            <ul className="pl-3 ml-2 mt-0 line-height-3">
                <li>Mínimo de 6 caracteres</li>
                <li>1 letra maiúscula</li>
                <li>1 letra minúscula</li>
                <li>1 número</li>
                <li>1 caractere especial</li>
            </ul>
        </>
    );

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordValid(e.target.value.length >= 6);
        setPasswordsMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordsMatch(e.target.value === password);
    };

    return (
        <div className="register-container">
            <Card title={<span><FontAwesomeIcon icon={faHorse} className="icon-horse" />Alterar Senha</span>} className="register-card">
                <div className="p-field">
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" placeholder="Digite seu e-mail" className="p-inputtext-sm" />
                </div>

                <div className="p-field">
                    <label htmlFor="code">Código</label>
                    <InputOtp
                        value={otp}
                        onChange={(e) => setOtp(e.value)}
                        length={4}  
                        inputClassName="p-inputtext-sm otp-input"
                        placeholder="Digite o código recebido"
                    />
                </div>

                <div className="p-field">
                    <label htmlFor="password">Nova Senha</label>
                    <Password
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        header={header}
                        footer={footer}
                        toggleMask
                        feedback={true}
                        inputClassName={isPasswordValid ? '' : 'p-invalid'}
                        placeholder="Digite sua nova senha"
                    />
                </div>

                <div className="p-field">
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <Password
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        feedback={false}
                        toggleMask
                        inputClassName={passwordsMatch ? '' : 'p-invalid'}
                        placeholder="Confirme sua senha"
                    />
                    {!passwordsMatch && <small className="p-error">As senhas não coincidem</small>}
                </div>

                <Button label="Alterar Senha" className="p-button-raised p-button-rounded alterar-senha-button" disabled={!isPasswordValid || !passwordsMatch} />
            </Card>
            <Button label="Cancelar" className="p-button-raised p-button-rounded cancelar-button" onClick={() => window.location.href = '/login'} />
        </div>
    );
};

export default AlterPassword;
