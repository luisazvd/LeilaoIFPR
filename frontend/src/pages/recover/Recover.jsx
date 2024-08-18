import React from "react";
import "./Recover.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';

const RecoverPassword = () => {
    return (
        <div className="recover-container">
            <Card title={<span><FontAwesomeIcon icon={faHorse} className="icon-horse" /> Recuperar Senha</span>} className="recover-card">
                <div className="p-field">
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" placeholder="Digite seu e-mail" className="p-inputtext-sm" />
                </div>
                <Button label="Recuperar Senha" className="p-button-raised p-button-rounded recover-button" />
                <Button label="Cancelar" className="p-button-link cancel-button" onClick={() => window.location.href = '/login'} />
            </Card>
        </div>
    );
}

export default RecoverPassword;
