import React from "react";
import { Card } from 'primereact/card';
import "./Login.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


const Login = () =>{

    return(
        <div>
            <Card title="Login">
                <InputText/>
                <Password feedback={false}/>
                <Button label="Login" />
                <Button label="Recuperar Senha" link onClick={() => window.open('/recover')} />
                <a href="/register" className="p-button font-bold">
                    Cadastre-se
                </a>
            </Card>
        </div>
    );
}
export default Login;