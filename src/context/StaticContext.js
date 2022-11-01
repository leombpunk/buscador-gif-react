import React from "react";

//este seria el valor por defecto sin provider
const Context = React.createContext({
    name: "esto-es-sin-provider",
    chupala: true
});

export default Context;