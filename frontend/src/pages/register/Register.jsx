import React, { useState } from "react";
import { Card } from 'primereact/card';
import "./Register.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
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
                        placeholder="Digite sua senha"
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
                <Button label="Cadastrar-se" className="p-button-raised p-button-rounded register-button" />
                <Button label="Cancelar" className="p-button-link cancel-button" onClick={() => window.location.href = '/login'} />
            </Card>
        </div>
    );
}

export default Register;