import React from "react";
import { FruitsProvider } from "./FruitsContext";
import FruitsForm from "./FruitsForm";
import FruitsList from "./FruitsList";

function Buah() {
    return (
        <FruitsProvider>
            <FruitsForm />
            <FruitsList />
        </FruitsProvider>
    );
}

export default Buah