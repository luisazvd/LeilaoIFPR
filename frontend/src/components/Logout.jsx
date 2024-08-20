import { Button } from "primereact/button";
import React from "react";

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <Button onClick={handleLogout} variant=""> Sair </Button>
    );
}

export default LogoutButton;
