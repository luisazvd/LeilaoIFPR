import React, { useState } from "react";
import { Card } from 'primereact/card';
import "./AlterPassword.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const AlterPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const validatePassword = (pass) => {
        const length = pass.length >= 6;
        const uppercase = /[A-Z]/.test(pass);
        const lowercase = /[a-z]/.test(pass);
        const number = /[0-9]/.test(pass);
        const specialChar = /[!@#$%&*_+:;.?~]/.test(pass);

        setPasswordCriteria({
            length,
            uppercase,
            lowercase,
            number,
            specialChar,
        });
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
                    <InputText id="code" placeholder="Digite o código recebido" className="p-inputtext-sm" />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Nova Senha</label>
                    <Password
                        id="password"
                        placeholder="Digite sua nova senha"
                        feedback={false}
                        toggleMask
                        inputClassName="password-input"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                    />
                    <ul className="password-requirements">
                        <li className={passwordCriteria.length ? "valid" : ""}>
                            <FontAwesomeIcon icon={passwordCriteria.length ? faCheck : faTimes} className={passwordCriteria.length ? "icon-check" : "icon-times"} />
                            Mínimo de 6 caracteres
                        </li>
                        <li className={passwordCriteria.uppercase ? "valid" : ""}>
                            <FontAwesomeIcon icon={passwordCriteria.uppercase ? faCheck : faTimes} className={passwordCriteria.uppercase ? "icon-check" : "icon-times"} />
                            1 letra maiúscula
                        </li>
                        <li className={passwordCriteria.lowercase ? "valid" : ""}>
                            <FontAwesomeIcon icon={passwordCriteria.lowercase ? faCheck : faTimes} className={passwordCriteria.lowercase ? "icon-check" : "icon-times"} />
                            1 letra minúscula
                        </li>
                        <li className={passwordCriteria.number ? "valid" : ""}>
                            <FontAwesomeIcon icon={passwordCriteria.number ? faCheck : faTimes} className={passwordCriteria.number ? "icon-check" : "icon-times"} />
                            1 número
                        </li>
                        <li className={passwordCriteria.specialChar ? "valid" : ""}>
                            <FontAwesomeIcon icon={passwordCriteria.specialChar ? faCheck : faTimes} className={passwordCriteria.specialChar ? "icon-check" : "icon-times"} />
                            1 caractere especial
                        </li>
                    </ul>
                </div>
                <div className="p-field">
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <Password id="confirm-password" placeholder="Confirme sua senha" feedback={false} toggleMask inputClassName="password-input" />
                </div>
                <Button label="Alterar Senha" className="p-button-raised p-button-rounded alterar-senha-button" />
            </Card>
            <Button label="Cancelar" className="p-button-raised p-button-rounded cancelar-button" onClick={() => window.location.href = '/login'} />
        </div>
    );
}

export default AlterPassword;